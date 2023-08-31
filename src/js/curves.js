//import * as dh from './data'
import * as dh from './dataHandlers'
import { onAuthStateChangedFb } from './auth';
import { monitorRegion } from './region'
import { select } from 'd3';
import { makeTrace, makeLayout, config } from './layout';
import { setActive, setActiveView, checkActive, setActiveTime, showPwdErr } from './ui';
import { lazyLoad } from './load/loader';


const displayEconomics = (data, selectedOption) => {
  let wellRMPL = 0;
  let wellYTDPL = 0;
  let monthPnL = "";
  data.forEach((ecoWell) => {
    let w = ecoWell["Well Name"].toLowerCase();
    let s = selectedOption.toLowerCase();
    if (w.includes(s)) {
      wellRMPL = ecoWell["Recent Month P&L"];
      wellYTDPL = ecoWell["YTD P&L"];
      monthPnL = ecoWell["Date"].slice(0, 3);
    }
  });

  pnlEl.innerHTML = `P&L : $${wellRMPL.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${monthPnL}`;
  ytdEl.innerHTML = `$${wellYTDPL.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} YTD`;
  pnlEl.style.display = "block";
  ytdEl.style.display = "block";

};

const displayPayout = (data, selectedOption) => {
  let site_data = data.filter(el => el["Well Name"] == selectedOption)[0]
  let payout100 = site_data ? site_data["% Payout"] * 100 : 0
  payoutEl.innerHTML =
    "Payout : " + payout100.toFixed(0).toLocaleString("en-US") + "%";
  payoutEl.style.display = "block";
  //document.getElementById("payout100").innerHTML = payout100.toFixed(0).toLocaleString("en-US")+ "%";

};

const displayPumpInfo = (data, total_fluid, selectedOption) => {
  let wellInfo = data.find(i => i["Well Name"] === selectedOption);
  
  if (wellInfo !== undefined) {
    if (
      wellInfo["SPM"] !== 0
    ) {
      //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo
      $(document).ready(function () {
        $("#pumpInfo").toggle();
        let recFluid = total_fluid[0];
        if (total_fluid[0] == 0 & total_fluid[2] == 0)recFluid = total_fluid[1];
        document.getElementById("c").innerHTML = `C: ${wellInfo["C"]}`;
        document.getElementById("SPM").innerHTML = `SPM: ${wellInfo["SPM"]}`;
        document.getElementById("DHSL").innerHTML = `DH SL: ${wellInfo["DH SL"]}`;
        document.getElementById("ideal").innerHTML = `Ideal bfpd: ${wellInfo["Ideal bfpd"]}`;
        document.getElementById("pumpEff").innerHTML = `Pump Eff: ${Math.round((recFluid/wellInfo["Ideal bfpd"])*100)}`;
        document.getElementById("pumpDepth").innerHTML = `Pump Depth: ${wellInfo["Pump Depth"]}`;
        document.getElementById("GFLAP").innerHTML = `GFLAP: ${wellInfo["GFLAP"]}`;
        document.getElementById("Inc").innerHTML = `Inc: ${wellInfo["Inc"]}`;
      });
    } else {
      $(document).ready(function () {
        $("#notPumpingInfo").toggle();
        $("#notPumping").html("This well is not on rod pump");
      });
    }
  } else {
    $(document).ready(function () {
      $("#notPumpingInfo").toggle();
      $("#notPumping").html("No pump data available");
    });
  };
};

const displayCumlData = (data, formations,selectedOption) => {
  if (selectedOption == "South Texas Total") selectedOption = "ST Total";
  if (selectedOption == "East Texas Total") selectedOption = "ET Total";
  if (selectedOption == "West Texas Total") selectedOption = "WT Total";
  if (selectedOption == "Gulf Coast Total") selectedOption = "GC Total";
  if (selectedOption == "New Mexico Total") selectedOption = "NM Total";

  const site_data = data.filter(sub => sub[0] === selectedOption)[0];
  const cuml = site_data[1];
  const waterCuml = site_data[2];
  const gasCuml = site_data[3];
  const formation = formations[selectedOption] || "";
  


  if (!formation) {
    document.getElementById("filler4").style.display = "";
  }

  formationEl.innerHTML = formation;
  cumlativeDataEl.innerHTML = `Cumulative: ${cuml} MBO, ${gasCuml} MMCF, ${waterCuml} MBW`;

};

const getSelectedOption = (data) => {
  let selectedOption = null;
  let menuNode = select("#siteSelection").node().value;
  
  if (menuNode != "default") {
    selectedOption = [menuNode];
  } else if (sessionStorage.siteSelection != null) {
    selectedOption = [sessionStorage.siteSelection];
    select("#siteSelection").node().value = selectedOption;
    sessionStorage.removeItem("siteSelection");
  } else selectedOption = [...data[0][0]];

  selectedOption = selectedOption.join('');
  sessionStorage.siteSelection = selectedOption;
  return selectedOption;
};

async function curve(timeFrame, data){
  console.time('parsedata')
  const selectedOption = getSelectedOption(data.prod);
  const site_data = data.prod.filter(site => site[0] === selectedOption);
  let total_fluid = site_data.map(site => site[9]);

  document.getElementById('wellName').textContent = selectedOption
  let region = sessionStorage.getItem("region");
  if (region == null) {
    sessionStorage.setItem('region', 'ST')
    region = 'ST'
  };

  ["c", "SPM", "DHSL", "ideal", "pumpEff", "pumpDepth", "GFLAP", "Inc", "notPumping"].forEach(id => {
    document.getElementById(id).innerHTML = "";
  });

  ["zoomEl", "individualTable","pumpInfo","notPumpingInfo", "pnl", "YTD","payout"].forEach(id => document.getElementById(id).style.display = 'none');
  if (region == "ST" & selectedOption != "South Texas Total") {
    if (currUid !== 'fh05lGDE7YSVyAu9eNP4bYRR9n42' & currUid !== null) {
      displayEconomics(data.econ, selectedOption);
      displayPayout(data.payout, selectedOption);
    }
    displayPumpInfo(data.pumpInfo, [...total_fluid], selectedOption);
  };
  displayCumlData(data.cuml,data.formation, selectedOption);
  ['gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves'].forEach(id => {
    document.getElementById(id).style.display = 'block';
  });

  let date365 = []; let oil365 = []; let percent = [];
  let mask = selectedOption == "South Texas Total" & currUid !== "fh05lGDE7YSVyAu9eNP4bYRR9n42" 
  if (mask){
    await import('./load\\recprod.js').then(module => {
      const data = module.recYrProd
      date365 = data.map(sub => sub["Date"],[]).reverse();
      oil365 = data.map(sub => sub["New Prod"],[]).reverse();
      percent = data.map(sub => sub["percent"],[]).reverse();
      document.getElementById('ratioRecProd').style.display = 'block';
    })
  }
  let site_date = site_data.map(site => site[8]);
  let site_oil = site_data.map(site => site[2]);
  let site_gas = site_data.map(site => site[3]);
  let site_water = site_data.map(site => site[4]);
  let comments = site_data.map(site => site[7]);
  let movingAverage = site_data.map(site => site[site.length-1]);
  let water_cut = site_water.map((water, i) => (water / (water + site_oil[i])) * 100);
  if (timeFrame > 0) [site_date, site_oil, site_gas, site_water, comments, movingAverage, oil365, date365, percent] =
  [site_date, site_oil, site_gas, site_water, comments, movingAverage, oil365, date365, percent].map(arr => arr.slice(0, timeFrame));
  console.timeEnd('parsedata')
  let trace365 = makeTrace(
    date365,
    oil365,
    "Production from New Wells (365 Days)",
    null,
    "purple",
    null,
    true
  )

  let traceOil = makeTrace( 
    site_date,
    site_oil,
    "Oil [BO]",
    null,
    "green",
    comments
  );

  const traceOilAvg = makeTrace(
    site_date,
    movingAverage,
    "7 Day Avg",
    "lines",
    null,
    null,
    null,
    'dot'
  );

  let traceGas = makeTrace(
    site_date,
    site_gas,
    "Gas [MCF]",
    "line",
    "red"
  );

  let traceWater = makeTrace(
    site_date,
    site_water,
    "Water [BW]",
    "line",
    "blue",
  );

  const traceCut = makeTrace(
    site_date,
    water_cut,
    "line",
    "#25C4DC"
  );

  let traceFluid = makeTrace(
    site_date,
    total_fluid,
    "Total Fluid [BBLS]",
    "line",
    "black"
  );

  let tracePercent = makeTrace(
    date365,
    percent,
    "Percent Past Year Production",
    "line",
    "#224a04"
  );
  const scale = (document.getElementById("logarithmic").classList.contains("active")) ? 'log' : 'linear';
  const plotContainers = ["gasDeclineCurve", "waterDeclineCurve", 'totalFluidCurve', 'waterCutCurve', 'combinationCurves', 'ratioRecProd'];
  let combination = [traceOil, traceOilAvg, {... traceGas}, {... traceWater}, {... traceFluid}, trace365];
  if (selectedOption !== "South Texas Total") {combination.pop(); document.getElementById('ratioRecProd').style.display = 'none';}

  let traceArrays = [
    [traceGas],
    [traceWater],
    [traceFluid],
    [traceCut],
    combination,
    [tracePercent]
  ];
  if (selectedOption !== "South Texas Total") {traceArrays.pop(); plotContainers.pop();}
  let showTraces = JSON.parse(sessionStorage.visible_traces).visible
  console.time('displayGraphs')
  plotContainers.forEach((container, i) => {
    if (i == 4){
      traceArrays[i].forEach(trace => {
        trace.visible = (showTraces.includes(trace.name)) ? true : "legendonly";
      });
    }
    

    const layout = makeLayout(['Gas vs Time (MCFD)', 'Water vs Time (BWPD)', 'Total Fluid vs Time (BFPD)', 'Water Cut Percentage', 'Combined Production', 'Percent Production from New Wells (365 Days)'][i], scale, 
        (scale === 'log') ? [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 3000] : null);
   Plotly.newPlot(container, traceArrays[i], layout, config);

  });
  console.timeEnd('displayGraphs')

  const combo = document.getElementById('combinationCurves');
  combo.on("plotly_relayout", function (eventData) {
    JSON.stringify(eventData);
    const zoomEL = document.getElementById("zoomEl");
    zoomEL.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `Produced:`;
    zoomEL.appendChild(p);


    let { "xaxis.range[0]": xRangeStart, "xaxis.range[1]": xRangeEnd } = eventData;
    if (!xRangeStart) { // if double-clicked
      xRangeStart = site_date[site_date.length - 1];
      xRangeEnd = site_date[0];
    }
    const xStart = xRangeStart.substring(0, 10);
    const xEnd = xRangeEnd.substring(0, 10);
    const startIdx = site_date.findIndex(value => value.includes(xStart));
    const endIdx = site_date.findIndex(value => value.includes(xEnd));
   
    if (startIdx === -1) { // zoomed where no data
      return;
    }
    
    const visible_traces = JSON.parse(sessionStorage.getItem('visible_traces'));
    const map = {'Gas [MCF]': site_gas, 'Oil [BO]': site_oil, 'Water [BW]': site_water, 'Total Fluid [BBLS]': total_fluid };
    const nameMap = {'Gas [MCF]': 'Gas [MMCF]', 'Oil [BO]': 'Oil [MBO]', 'Water [BW]': 'Water [MBW]', 'Total Fluid [BBLS]': 'Total Fluid [MBBL]' };
    for (const[key,vals] of Object.entries(visible_traces)){
      for (let val of vals){
        if (!Object.keys(map).includes(val)) continue;
        const data = map[val];
        let sum = (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000);
        sum = sum.toFixed(1) == 0.0 ? sum.toFixed(2) : sum.toFixed(1)

        const p = document.createElement('p');
        p.textContent = `${sum} ${nameMap[val]}`;
        p.style.fontSize = '15px';
        zoomEL.appendChild(p);
      }
    }
    zoomEL.style.display = "block";
    if (window.innerWidth > 400) dd.focus();
  });

  combo.on('plotly_legendclick', function(data) {
    const traceIdx = data.curveNumber;
    const name = combination[traceIdx].name;
    let currVisible = JSON.parse(sessionStorage.visible_traces) || {"visible_traces": []};

    if (currVisible.visible.includes(name)){
      currVisible.visible = currVisible.visible.filter(el => el !== name)
    }else{
      currVisible.visible.push(name);
    }

    sessionStorage.setItem('visible_traces', JSON.stringify(currVisible));
  })

  if (window.innerWidth > 400) dd.focus();
  document.getElementById("filler4").style.display = "none";
};

const table = (coreData) => {
  let data = coreData.map(row => [...row]);
  const selectedOption = getSelectedOption(data);
  let well = data.filter(i => i[0] == selectedOption);
  well.forEach(w => {
    w.shift();
    for (let i = 0; i < 3; i++) w.pop();
  });
  dh.buildTable(well);
  document.getElementById('individualTable').style.display = 'inline-block';
  ['gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'ratioRecProd'].forEach(tag => {
    document.getElementById(tag).style.display = 'none'
  });

  if (window.innerWidth <= 768){
    const headerText = ['Date', 'O', 'G', 'W', 'TP', 'CP', 'Comments'];
    [...['dateHeader', 'oilHeader', 'gasHeader', 'waterHeader', 'TPHeader', 'CPHeader', 'commentsHeader']].forEach((tag, index) => {
      document.getElementById(tag).textContent = headerText[index]
    });
  }
};

const switchActives = (event) => {
  event.preventDefault();
  const target = event.target;
  const parent = document.getElementById(target.id).parentNode;
  const children = parent.querySelectorAll("*");
  if (checkActive('table') === true & parent.id == 'timeframes') return;

  children.forEach(child => {
    child.classList.remove("active");
  });
  
  target.className += "active";
  const activeTime = document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);//gives the number from the active view id
  curve(Number(activeTime) + 1, curveInfo);

  function ddd () {
    try{
      dd.blur();
    }catch{
    };
  }
  
  if (window.innerWidth < 400) setTimeout(ddd,50);
  dd.focus();
};

function test(payoutData){
  let opts = dd.options;
  let wells = []
  for (let i = 1; i < opts.length; i ++){
    wells.push(opts[i].Value)
    let site_data = payoutData.filter(el => el["Well Name"] == opts[i].Value)[0]
    if (site_data == undefined) console.log('well :>> ', opts[i].Value);
  }
  
}

onAuthStateChangedFb();
const currUid = localStorage.getItem('uid');
let curveInfo;
const dd = document.getElementById('siteSelection');
const pnlEl = document.getElementById("pnl");
const ytdEl = document.getElementById("YTD");
const payoutEl = document.getElementById("payout");
const formationEl = document.getElementById('formation');
const cumlativeDataEl = document.getElementById('cumlativeData');


$(document).ready(function () {
  $("#header").load("../src/pages/header.html", () => {
    monitorRegion();
    document.getElementById('wbd_link').style.display = 'block';
  });
});

['linear','logarithmic','DaysInception','Days30','Days365','Days180'].forEach(el => {
  document.getElementById(el).addEventListener('click',switchActives);
});

$(dd).on("change", () => {
  let activeTime = 'DaysInception';
  if (localStorage.initTime == 31) activeTime = 'Days30';
  setActiveTime(activeTime);
  setActiveView(localStorage.getItem('initScale'));
  //sessionStorage.visible_traces = JSON.stringify({"visible":["Oil [BO]"]});
  curve(localStorage.initTime, curveInfo);
});

document.getElementById("table").addEventListener('click', () => {
  if (checkActive('table') === true) return;
  setActive("table", 'DaysInception');
  table(curveInfo.prod);
});

//init page on load//
window.onload = function () {
  let activeTime = 'DaysInception';
  if (localStorage.getItem('initTime') == 31) activeTime = 'Days30';
  setActiveTime(activeTime);
  setActiveView(localStorage.getItem('initScale'));
  sessionStorage.visible_traces = JSON.stringify({"visible":["Oil [BO]"]});
  lazyLoad().then(data => {
    curveInfo = data;
    dh.dropdown('#siteSelection',data.prod);
    curve(localStorage.getItem('initTime'), data);
    if (window.innerWidth > 400) dd.focus();
    test(data.payout)
  })
  if (window.innerWidth > 400) dd.focus();

}();

$(document).on('click', function (e) {
  if (window.innerWidth > 400) dd.focus();
});