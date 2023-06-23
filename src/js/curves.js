import * as dh from './data'
import { monitorRegion } from './region'
import { monitorAuthState } from './index'
import { select } from 'd3';
import { makeTrace, makeLayout, config } from './layout';
import { setActive, setActiveView, checkActive, setActiveTime } from './ui';

monitorAuthState();
monitorRegion();

const displayEconomics = (data, selectedOption) => {
  let wellRMPL = 0;
  let wellYTDPL = 0;
  let monthPnL = "";

  data.forEach((ecoWell) => {
    if (ecoWell["Well Name"].includes(selectedOption)) {
      wellRMPL = ecoWell["Recent Month P&L"];
      wellYTDPL = ecoWell["YTD P&L"];
      monthPnL = ecoWell["Date"].slice(0, 3);
    }
  });
  document.getElementById("pnl").innerHTML = `P&L : $${wellRMPL.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${monthPnL}`;
  document.getElementById("YTD").innerHTML = `$${wellYTDPL.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} YTD`;
};

const displayPayout = (data, selectedOption) => {
  var payout100 = 0;
  data.forEach((payoutWell) => {
    if (payoutWell["Well Name"].includes(selectedOption)) {
      payout100 = payoutWell["% Payout"] * 100;
    }
  });
  document.getElementById("payout").innerHTML =
    "Payout : " + payout100.toFixed(0).toLocaleString("en-US") + "%";
  //document.getElementById("payout100").innerHTML = payout100.toFixed(0).toLocaleString("en-US")+ "%";

};

const displayPumpInfo = (data, selectedOption) => {
  let wellInfo = data.find(i => i["Well Name"] === selectedOption);
  if (wellInfo !== undefined) {
    if (
      wellInfo["SPM"] !== 0
    ) {
      //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo
      $(document).ready(function () {
        $("#pumpInfo").toggle();
        document.getElementById("c").innerHTML = `C: ${wellInfo["C"]}`;
        document.getElementById("SPM").innerHTML = `SPM: ${wellInfo["SPM"]}`;
        document.getElementById("DHSL").innerHTML = `DH SL: ${wellInfo["DH SL"]}`;
        document.getElementById("ideal").innerHTML = `Ideal bfpd: ${wellInfo["Ideal bfpd"]}`;
        document.getElementById("pumpEff").innerHTML = `Pump Eff: ${Math.round(wellInfo["Pump Eff"] * 100)}`;
        document.getElementById("pumpDepth").innerHTML = `Pump Depth: ${wellInfo["Pump Depth"]}`;
        document.getElementById("GFLAP").innerHTML = `GFLAP: ${wellInfo["GFLAP"]}`;
        document.getElementById("Inc").innerHTML = `Inc: ${wellInfo["Inc"]}`;
      });
    } else {
      $(document).ready(function () {
        $("#notPumpingInfo").toggle();
        $("#notPumping").html("This well is not pumping");
      });
    }
  } else {
    $(document).ready(function () {
      $("#notPumpingInfo").toggle();
      $("#notPumping").html("No pump data available");
    });
  };
};

const displayCumlData = (data, selectedOption) => {
  let selectedWell = {
    cuml: 0,
    gasCuml: 0,
    waterCuml: 0,
    formation: ""
  };

  data.forEach(well => {
    if (selectedOption === well[0]) {
      selectedWell.cuml = well[1];
      selectedWell.gasCuml = well[3];
      selectedWell.waterCuml = well[2];
      selectedWell.formation = well[4];
    }
  });

  const formationEl = document.getElementById("formation");
  const cumulativeDataEl = document.getElementById("cumlativeData");

  if (!selectedWell.formation) {
    document.getElementById("filler4").style.display = "";
  }

  formationEl.innerHTML = selectedWell.formation;
  cumulativeDataEl.innerHTML = `Cumulative: ${selectedWell.cuml} MBO, ${selectedWell.gasCuml} MMCF, ${selectedWell.waterCuml} MBW`;

};

const getSelectedOption = (data) => {
  let selectedOption = null;
  let menuNode = select("#siteSelection").node().value;
  
  if (menuNode != "default") {
    selectedOption = [menuNode];
  } else if (sessionStorage.getItem("siteSelection") != null) {
    selectedOption = [sessionStorage.getItem("siteSelection")];
    sessionStorage.removeItem("siteSelection");
  } else selectedOption = [...data[0][0]];

  selectedOption = selectedOption.join('');
  sessionStorage.siteSelection = selectedOption;
  return selectedOption;
};

const curve = (timeFrame, data) => {
  const selectedOption = getSelectedOption(data.prodData);

  let region = sessionStorage.getItem("region");
  if (region == null) {
    sessionStorage.setItem('region', 'st')
    region = 'st'
  };

  if (region != "et") {
    displayEconomics(data.economicsData, selectedOption);
    displayPayout(data.payoutData, selectedOption);
    displayPumpInfo(data.pumpData, selectedOption);

    // Hide previous pumping info
    document.getElementById("pumpInfo").style.display = "none";
    document.getElementById("notPumpingInfo").style.display = "none";

    // Clear pump info text for next selection
    ["c", "SPM", "DHSL", "ideal", "pumpEff", "pumpDepth", "GFLAP", "Inc", "notPumping"].forEach(id => {
      document.getElementById(id).innerHTML = "";
    });
  };
  displayCumlData(data.dataCuml, selectedOption);

  document.getElementById("zoomEl").style.visibility = "hidden"; //dont display old zoom data if switching b/t wells/timeframes
  document.getElementById("wellName").innerHTML = selectedOption;
  document.getElementById("individualTable").style.display = "none";

  [/*'oilDeclineCurve',*/ 'gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'moOilCurve'].forEach(id => {
    document.getElementById(id).style.display = 'block';
  });

  const site_data = data.prodData.filter(site => site[0] === selectedOption);
  let site_date = site_data.map(site => site[9]);
  let site_oil = site_data.map(site => site[2]);
  let site_gas = site_data.map(site => site[3]);
  let site_water = site_data.map(site => site[4]);
  let comments = site_data.map(site => site[7]);
  let movingAverage = site_data.map(site => site[8]);
  let water_cut = site_water.map((water, i) => (water / (water + site_oil[i])) * 100);
  let total_fluid = site_oil.map((oil, index) => oil + site_water[index]);
  if (timeFrame > 0) [site_date, site_oil, site_gas, site_water, comments, movingAverage] =
  [site_date, site_oil, site_gas, site_water, comments, movingAverage].map(arr => arr.slice(0, timeFrame));

  // READING MONTHLY DATA (+ Drops most recent month)
  const mo_site_data = data.MoProdDataST.filter(site => site[0] === selectedOption);
  mo_site_data.pop();
  let site_date_mo = mo_site_data.map(site => site[6]);
  let site_oil_mo = mo_site_data.map(site => site[1]);
  const cumlMoOil = site_oil_mo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);

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
    // "Water [Mbw]",
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

  let traceMoOil = makeTrace(
    site_date_mo,
    site_oil_mo,
    "Monthly Oil [BO]",
    "line",
    "green"
  );

  const scale = (document.getElementById("logarithmic").classList.contains("active")) ? 'log' : 'linear';
  const plotContainers = [/*"oilDeclineCurve", */"gasDeclineCurve", "waterDeclineCurve", 'totalFluidCurve', 'waterCutCurve', 'combinationCurves', 'moOilCurve'];
  const combination = [traceOil, traceOilAvg, traceGas, traceWater, traceFluid];
  let traceArrays = [
    // [traceOil, traceOilAvg],
    [traceGas],
    [traceWater],
    [traceFluid],
    [traceCut],
    combination,
    [traceMoOil]
  ];

  plotContainers.forEach((container, i) => {
    traceArrays[i].forEach(trace => {
      trace.visible = (i === 4 && trace.name !== "Oil [BO]") ? "legendonly" : trace.visible;
    });
    const layout = makeLayout([/*'Oil vs Time (BOPD)', */'Gas vs Time (MCFD)', 'Water vs Time (BWPD)', 'Total Fluid vs Time (BFPD)', 'Water Cut Percentage', 'Combined Production', 'Monthly Oil vs Time (BOPM)'][i], scale, 
                              (scale === 'log') ? [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 3000] : null);
    Plotly.newPlot(container, traceArrays[i], layout, config);
  });

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

    const startIdx = site_date.indexOf(`${xStart}T00:00:00.000Z`);
    const endIdx = site_date.indexOf(`${xEnd}T00:00:00.000Z`);

    if (startIdx === -1) { // zoomed where no data
      return;
    }
    const visible_traces = JSON.parse(sessionStorage.getItem('visible_traces'));
    const map = {'Gas [MCF]': site_gas, 'Oil [BO]': site_oil, 'Water [BW]': site_water, 'Total Fluid [BBLS]': total_fluid };

    for (const[key,vals] of Object.entries(visible_traces)){
      for (let val of vals){
        const data = map[val];
        console.log(`sum ${val}:>> `, (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000));
        const sum = (data.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0)/1000).toFixed(1);

        let chop = -5;
        if (val == 'Total Fluid [MB]') chop = -4; 
        const unit = val.slice(chop);
        let name = val.slice(0, chop);
        if (val == 'Total Fluid [MB]') name = `${name} `; 

        const p = document.createElement('p');
        p.textContent = `${name}: ${sum} ${unit}`;
        p.style.fontSize = '15px';
        zoomEL.appendChild(p);
      }
    }
    zoomEL.style.visibility = "visible";
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

  document.getElementById("siteSelection").focus();
  document.getElementById("filler4").style.display = "none";
};

const table = (coreData) => {
  const data = coreData.map(el => ([...el]))
  const selectedOption = getSelectedOption(data);
  const well = data.filter(i => i[0] == selectedOption);

  well.forEach(w => {
    w.shift();
    for (let i = 0; i < 2; i++) w.pop();
  });
  dh.buildTable(well);

  document.getElementById('individualTable').style.display = 'inline-block';
  [/*'oilDeclineCurve,'*/ 'gasDeclineCurve', 'waterDeclineCurve', 'waterCutCurve', 'totalFluidCurve', 'combinationCurves', 'cumOilCurve', 'cumVSdailyProdCurve', 'cumVSmoProdCurve','moOilCurve'].forEach(tag => {
    document.getElementById(tag).style.display = 'none'
  });
};

const switchActives = (event) => {
  event.preventDefault();
  
  const target = event.target;
  const parent = document.getElementById(target.id).parentNode;
  const children = parent.querySelectorAll("*");
  
  children.forEach(child => {
    child.classList.remove("active");
  });
  
  target.className += "active";
  const activeTime = document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);//gives the number from the active view id
  console.log('activeTime :>> ', activeTime);
  curve(Number(activeTime) + 1, curveInfo);

  function ddd () {
    console.log("in ddd");
    try{
      console.log("closing");
      document.getElementById("siteSelection").blur();
      console.log("closed..");
    }catch{
      console.log("e");
    };
  }
  setTimeout(ddd,100)
};




//Main//
const currUid = localStorage.getItem('uid');
let region = sessionStorage.getItem('region');
console.log('currUid :>> ', currUid);

let prodData = dh.dataST;
let cumlData = dh.dataCuml;
let MoProdDataST = dh.moDataST;

if (region == "et") {
  prodData = dh.dataET
  cumlData = dh.dataCumlET
};

const curveInfo = {
  prodData: prodData,
  dataCuml: cumlData,
  economicsData: dh.econ,
  payoutData: dh.payout,
  pumpData: dh.pump,
  MoProdDataST: MoProdDataST
};

['linear','logarithmic','DaysInception','Days30','Days365','Days180'].forEach(el => {
  document.getElementById(el).addEventListener('click',switchActives);
});

const dropdownId = '#siteSelection';
dh.dropdown(dropdownId);

select(dropdownId).on("change", () => {
  curve(localStorage.getItem('initTime'), curveInfo);
});
document.getElementById(dropdownId).addEventListener('click', () => {
  console.log("hit dd");
})

document.getElementById("table").addEventListener('click', () => {
  if (checkActive('table') === true) return;
  setActive("table", 'DaysInception');
  table(prodData);
});

//store currently visible plots in sessionstorage to access in relayout event; init to only oil(page load)
let currVisible = {"visible":["Oil [BO]"]};
sessionStorage.setItem("visible_traces",JSON.stringify(currVisible));

//init page on load//
window.onload = function () {
  let activeTime = 'DaysInception';
  if (localStorage.getItem('initTime') == 31) activeTime = 'Days30';
  setActiveTime(activeTime);
  setActiveView(localStorage.getItem('initScale'));
  curve(localStorage.getItem('initTime'), curveInfo);
}();