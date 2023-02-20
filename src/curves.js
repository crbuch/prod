import { logout } from './index'
import { } from './region'
import * as dh from './data'
import { makeData, makeLayout, config } from './layout';
import { setActive, setActiveTime, toggleInitTime, checkActive, activeFromStorage } from './ui';

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
        document.getElementById("pumpEff").innerHTML = `Pump Eff: ${wellInfo["Pump Eff"] * 100}`;
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
  let menuNode = d3.select("#siteSelection").node().value;

  if (menuNode != "default") {
    selectedOption = [menuNode];
  } else if (sessionStorage.getItem("siteSelection") != null) {
    selectedOption = [sessionStorage.getItem("siteSelection")];
    sessionStorage.removeItem("siteSelection");
  } else selectedOption = [...data[0][0]];

  return selectedOption.join('');
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

  let scale = "linear";
  document.querySelectorAll(".active").forEach((el) => {
    if (el.id == "logarithmic") scale = "log";;
  });

  document.getElementById("zoomOil").style.visibility = "hidden"; //dont display old zoom data if switching b/t wells/timeframes
  document.getElementById("wellName").innerHTML = selectedOption;
  document.getElementById("individualTable").style.display = "none";

  ['oilDeclineCurve','gasDeclineCurve','waterDeclineCurve','waterCutCurve'].forEach(id => {
    document.getElementById(id).style.display = 'block';
  });

  let site_oil = [];
  let site_gas = [];
  let site_water = [];
  let site_date = [];
  let comments = [];
  let movingAverage = [];
  let water_cut = [];

  data.prodData.forEach((site) => {
    if (site[0] === selectedOption) {
      site_date.push(site[9]);
      site_oil.push(site[2]);
      site_gas.push(site[3]);
      site_water.push(site[4]);
      comments.push(site[7]);
      movingAverage.push(site[8]);
      water_cut.push((site[4] / (site[4] + site[2])) * 100);
    }
  });

  if (timeFrame > 0) {
    site_date = site_date.slice(0, timeFrame);
    site_oil = site_oil.slice(0, timeFrame);
    site_gas = site_gas.slice(0, timeFrame);
    site_water = site_water.slice(0, timeFrame);
    comments = comments.slice(0, timeFrame);
    movingAverage = movingAverage.slice(0, timeFrame);
  };

  const dataOilnorm = makeData(
    site_date,
    site_oil,
    "Oil",
    null,
    "green",
    null,
    comments
  );

  const dataOilmoving = makeData(
    site_date,
    movingAverage,
    "7 Day Avg",
    "line",
    null,
    "dot"
  );

  const dataGas = makeData(site_date, site_gas, "Gas [Mcf]", "line", "red");

  const dataWater = makeData(
    site_date,
    site_water,
    "Water [Mbw]",
    "line",
    "blue"
  );

  const dataCut = [
    {
      x: site_date,
      y: water_cut,
      line: { color: "#25C4DC" },
    },
  ];

  const layoutCut = makeLayout("Water Cut Percentage");

  const layoutLog = makeLayout("Fluids Produced vs Times", "log", [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]);

  const layoutOil = makeLayout("Oil (BOPD) vs Time", scale, null);

  const layoutGas = makeLayout("Gas (MCFD) vs Time", scale, null);

  const layoutWater = makeLayout("Water (BWPD) vs Time", scale, null);

  if (scale == "log") {
    Plotly.newPlot("oilDeclineCurve", [dataOilnorm, dataOilmoving], layoutLog, {
      showSendToCloud: true,
    });
    Plotly.newPlot("gasDeclineCurve", [dataGas], layoutLog, config);
    Plotly.newPlot("waterDeclineCurve", [dataWater], layoutLog, config);
  } else {
    Plotly.newPlot("oilDeclineCurve", [dataOilnorm, dataOilmoving], layoutOil, config);
    Plotly.newPlot("gasDeclineCurve", [dataGas], layoutGas, config);
    Plotly.newPlot("waterDeclineCurve", [dataWater], layoutWater, config);
  }
  Plotly.newPlot("waterCutCurve", dataCut, layoutCut, config);

  //Display oil production based on zoom
  const oilDeclineCurve = document.getElementById("oilDeclineCurve");
  oilDeclineCurve.on("plotly_relayout", function (eventData) {
    JSON.stringify(eventData);
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
    const sum = site_oil.slice(endIdx, startIdx + 1).reduce((acc, cur) => acc + cur, 0);
    const produced = (sum / 1000).toFixed(1);

    const zoomOilElement = document.getElementById("zoomOil");
    zoomOilElement.innerHTML = `Produced: ${produced} MBO, from ${xStart} to ${xEnd}`;
    zoomOilElement.style.visibility = "visible";
  });

  document.getElementById("siteSelection").focus();
  document.getElementById("filler4").style.display = "none";
};

const table = (coreData) => {
  const data = coreData.map(el => ([...el ]))
  const selectedOption = getSelectedOption(data);
  const well = data.filter(i => i[0] == selectedOption);

  well.forEach(w => {
    w.shift();
    for (let i = 0; i < 2; i++) w.pop();
  });
  dh.buildTable(well);

  document.getElementById('individualTable').style.display = 'inline-block';
  ['oilDeclineCurve','gasDeclineCurve','waterDeclineCurve','waterCutCurve'].forEach(tag => {
    document.getElementById(tag).style.display = 'none'
  });

  
};

const init = () => {
  activeFromStorage();
  curve(localStorage.getItem('initTime'), curveInfo);
};


//Main//
const currUid = sessionStorage.getItem('currUid');
let region = sessionStorage.getItem('region');
console.log('currUid :>> ', currUid);

let prodData = dh.dataST;
let cumlData = dh.dataCuml;

if (region == "et") {
  prodData = dh.dataET
  cumlData = dh.dataCumlET
};

const curveInfo = {
  prodData: prodData, 
  dataCuml: cumlData, 
  economicsData: dh.econ, 
  payoutData: dh.payout, 
  pumpData: dh.pump
};

const dropdownId = '#siteSelection';
const linearTag = 'linear';
const logTag = 'logarithmic';
const inceptionTag = 'DaysInception';
const thirtyTag = 'Days30';
const yearTag = 'Days365';
const halfYearTag = 'Days180';

let initTime = localStorage.getItem('initTime');
if (initTime == 31) $('#initTime').text('Init: 30 Days');

dh.dropdown(prodData, dropdownId);

d3.select(dropdownId).on("change", () => {
  setActive(linearTag, activeFromStorage());
  curve(localStorage.getItem('initTime'), curveInfo);
});

d3.select('#initTime').on('change', () => {
  curve(initTime, curveInfo);
  activeFromStorage();
});

d3.selectAll(`#${linearTag}, #${logTag}, #${inceptionTag}, #${thirtyTag}, #${halfYearTag}, #${yearTag}`)
  .on("click", function () {
    if (this.id === linearTag || this.id === logTag) {
      setActive(this.id, activeFromStorage());
      curve(localStorage.getItem('initTime'), curveInfo);
    } else {
      setActiveTime(this.id);
      if (this.id === thirtyTag) {
        curve(31, curveInfo);
      } else if (this.id === halfYearTag) {
        curve(181, curveInfo);
      } else if (this.id === yearTag) {
        curve(366, curveInfo);
      } else if (this.id === inceptionTag) {
        curve(0, curveInfo);
      }
    }
});

document.getElementById("table").addEventListener('click', () => {
    if (checkActive('table') === true) return;
    setActive("table", inceptionTag);
    table(prodData);
});

document.getElementById("initTime").addEventListener('click', () => {
  toggleInitTime();
  curve(localStorage.getItem('initTime'), curveInfo);
  activeFromStorage();
});

document.getElementById("btnLogout").addEventListener('click', logout);

//init page on load//
$(window).on("load", init());