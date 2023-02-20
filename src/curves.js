import { logout } from './index'
import { } from './region'
import * as dh from './data'
import { makeData, makeLayout, config } from './layout';
import { setActive, setActiveTime, changeInitTime } from './ui';

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
  let wellInfo = data.find(o => o["Well Name"] === selectedOption);

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

//Creates Graphs//
const curve = (timeFrame, data, dataCuml, economicsData, payoutData, pumpData) => {
  let selectedOption = null;
  let region = sessionStorage.getItem("region");
  if (region == null) {
    sessionStorage.setItem('region', 'st')
    region = 'st'
  };

  let menuNode = d3.select("#siteSelection").node().value;

  if (menuNode != "default") {
    selectedOption = menuNode;
  } else if (sessionStorage.getItem("siteSelection") != null) {
    selectedOption = sessionStorage.getItem("siteSelection");
    sessionStorage.removeItem("siteSelection");
  }
  if (selectedOption == null) {
    selectedOption = data[0][0];
  }

  if (region != "et") {
    displayEconomics(economicsData, selectedOption);
    displayPayout(payoutData, selectedOption);
    displayPumpInfo(pumpData, selectedOption);
  };
  displayCumlData(dataCuml, selectedOption);

  let scale = null;
  document.querySelectorAll(".active").forEach((el) => {
    if (el.id == "linear") {
      scale = "linear";
    } else if (el.id == "logarithmic") {
      scale = "log";
    }
  });

  document.getElementById("zoomOil").style.visibility = "hidden"; //dont display old zoom data if switching b/t wells/timeframes

  document.getElementById("wellName").innerHTML = selectedOption;

  var hidetable = document.getElementById("individualTable");
  hidetable.style.display = "none";

  document.getElementById("oilDeclineCurve").style.display = "block"
  document.getElementById("gasDeclineCurve").style.display = "block"
  document.getElementById("waterDeclineCurve").style.display = "block"
  document.getElementById("waterCutCurve").style.display = "block"

  //HIDE PUMPING INFO  SINCE THEY WILL BE SHOWING FROM PREVIOUS SELECTION
  if (region !== "et") {
    // Hide previous pumping info
    document.getElementById("pumpInfo").style.display = "none";
    document.getElementById("notPumpingInfo").style.display = "none";

    // Clear pump info text for next selection
    ["c", "SPM", "DHSL", "ideal", "pumpEff", "pumpDepth", "GFLAP", "Inc", "notPumping"].forEach(id => {
      document.getElementById(id).innerHTML = "";
    });
  };

  var site_oil = [];
  var site_gas = [];
  var site_water = [];
  var site_date = [];
  var comments = [];
  var movingAverage = [];
  let water_cut = [];

  data.forEach((site) => {
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
    var site_date = site_date.slice(0, timeFrame);
    var site_oil = site_oil.slice(0, timeFrame);
    var site_gas = site_gas.slice(0, timeFrame);
    var site_water = site_water.slice(0, timeFrame);
    var comments = comments.slice(0, timeFrame);
    var movingAverage = movingAverage.slice(0, timeFrame);
  }

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
    //Plotly.newPlot("fluidCurve", fluidData, layoutLog, config);
    Plotly.newPlot("oilDeclineCurve", [dataOilnorm, dataOilmoving], layoutLog, {
      showSendToCloud: true,
    });
    Plotly.newPlot("gasDeclineCurve", [dataGas], layoutLog, config);
    Plotly.newPlot("waterDeclineCurve", [dataWater], layoutLog, config);
  } else {
    //Plotly.newPlot("fluidCurve", fluidData, layoutOver, config);
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

//Creates Table//
async function table() {
  //SELECT <select> TO LATER "GRAB" THE SELECTION MADE AS TEXTS
  var dropdownMenu = d3.select("#siteSelection").node();
  //DECLARE ITEM SAVED IN STORAGE
  var clickedFromAnalyzed = sessionStorage.getItem("siteSelection");
  //DECLARE WHAT WILL BE SAVED AS THE SELECTION
  let selectedOption;
  //USE TO DETERMINE SELECTION USED TO CREATE TABLE
  if (clickedFromAnalyzed == null) {
    //IF NOTHING IN STORAGE USE dropdown.value TO CREATE TABLE
    selectedOption = dropdownMenu.value;
  } else {
    //IF STORAGE IS NOT NULL, TEXT IN STORAGE IS USED TO CREATE TABLE
    selectedOption = clickedFromAnalyzed;
  }
  //READ IN FILE WITH DATA FOR TABLE
  let tableData = await d3.json("../data/allProductionData" + region + ".json");
  buildTable(tableData)
  function buildTable(allData) {
    tbody = d3.select("tbody");
    tbody.html("");
    if (selectedOption == "default") {
      selectedOption = "Aaron #1"
    }
    allData.forEach((well) => {
      if (well[0] == selectedOption) {
        well.shift()
        well.splice(well.length - 2, 2)

        let row = tbody.append("tr");
        Object.values(well).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
        });

      }

    });
    document.getElementById("individualTable").style.display = "inline-block"
    document.getElementById("oilDeclineCurve").style.display = "none"
    document.getElementById("gasDeclineCurve").style.display = "none"
    document.getElementById("waterDeclineCurve").style.display = "none"
    document.getElementById("waterCutCurve").style.display = "none"
  }
};

const activeFromStorage = () => {
  const initTime = localStorage.getItem('initTime');
  let activeTime = 'DaysInception';
  if (initTime == 31) activeTime = 'Days30';
  setActiveTime(activeTime);
  return activeTime
};

const init = () => {
  activeFromStorage();
  curve(localStorage.getItem('initTime'), prodData, cumlData, dh.econ, dh.payout, dh.pump);
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
  curve(localStorage.getItem('initTime'), prodData, cumlData, dh.econ, dh.payout, dh.pump);
});

d3.select('#initTime').on('change', () => {
  curve(initTime, prodData, cumlData, dh.econ, dh.payout, dh.pump);
  activeFromStorage();
});

d3.selectAll(`#${linearTag}, #${logTag}, #${inceptionTag}, #${thirtyTag}, #${halfYearTag}, #${yearTag}`)
  .on("click", function () {
    if (this.id === linearTag || this.id === logTag) {
      setActive(this.id, activeFromStorage());
      curve(localStorage.getItem('initTime'), prodData, cumlData, dh.econ, dh.payout, dh.pump);
    } else {
      setActiveTime(this.id);
      if (this.id === thirtyTag) {
        curve(31, prodData, cumlData, dh.econ, dh.payout, dh.pump);
      } else if (this.id === halfYearTag) {
        curve(181, prodData, cumlData, dh.econ, dh.payout, dh.pump);
      } else if (this.id === yearTag) {
        curve(366, prodData, cumlData, dh.econ, dh.payout, dh.pump);
      } else if (this.id === inceptionTag) {
        curve(0, prodData, cumlData, dh.econ, dh.payout, dh.pump);
      }
    }
  }
  );

//TABLE LISTENER//
d3.select("#table").on("click", () => {
  setActive("table", inceptionTag);
  table();
});

//init page on load//
$(window).on("load", init());

document.getElementById("btnLogout").addEventListener('click', logout);
document.getElementById("initTime").addEventListener('click', () => {
  changeInitTime();
  curve(localStorage.getItem('initTime'), prodData, cumlData, dh.econ, dh.payout, dh.pump);
  activeFromStorage();
});