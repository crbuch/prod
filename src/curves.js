import {logout} from './index'
const currUid = sessionStorage.getItem('currUid');
console.log('currUid :>> ', currUid);

//oout
document.getElementById("btnLogout").addEventListener('click',logout)

//dyn underline active buttons//
function setActive(view, time) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    el.classList.remove("active");
  });
  document.getElementById(view).className += "active";
  document.getElementById(time).className += "active";
};

function setActiveTime(time) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    //console.log('el.id :>> ', el.id);
    if (el.id.includes("Days")) {
      el.classList.remove("active");
    }
  });
  document.getElementById(time).className += "active";
}

//Creates Dropdown//
function createDropdownOptions() {
  var partnerSelector = d3.select("#siteSelection"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR, find id:siteselection in curves.html
  let region = document.getElementById("region") // ET ST(blank)
  d3.json("../data/allProductionData"+region+".json").then((allData) => {
    //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
    let repeatedWells = []; //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
    allData.forEach((row) => {
      //LOOP THROUGH NET_INTEREST FILE, calls method element in array: array.foreach(function)
      repeatedWells.push(row[0]); //PUSH ALL PARTNER'S NAME TO LIST
    });

    let wells = [...new Set(repeatedWells)].sort(); //CREATE A UNIQUE LIST OF ALL WELLS AND SORT
    wells.forEach((well) => {
      //FOR EACH OF THE UNIQUE WELLS, CREATE AN OPTION FOR THE DROP DOWN
      partnerSelector.append("option").text(well).property("Value", well);
    });
  });
}

//Creates Graphs//
function Curve(timeFrame) {
  let region = document.getElementById("region").textContent // ET ST
  let selectedOption = null;
  if (region == null) {
    region = 'ET'
    console.log("text con",region)
  }

  if (d3.select("#siteSelection").node().value != "default") {
    //clicked on well in dropdown
    let dropdownMenu = d3.select("#siteSelection").node();
    selectedOption = dropdownMenu.value;
    sessionStorage.removeItem("siteSelection");
  } else if (sessionStorage.getItem("siteSelection") != null) {
    //redirected from anaylze
    selectedOption = sessionStorage.getItem("siteSelection");
  } else if (
    sessionStorage.getItem("siteSelection") == null &&
    d3.select("#siteSelection").node().value == "default" &&
    region == "ET"
  ) {
    //first time loading ETpage
    selectedOption = "Beal #1";
  } else if (
    sessionStorage.getItem("siteSelection") == null &&
    d3.select("#siteSelection").node().value == "default"
  ){
    //first time loading STpage
    selectedOption = "Aaron #1";
  }
  //console.log("selected!",selectedOption)
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
  if (region != "ET"){
    var previousPumpInfo = document.getElementById("pumpInfo");
    previousPumpInfo.style.display = "none";

    var previousNotPumpingInfo = document.getElementById("notPumpingInfo");
    previousNotPumpingInfo.style.display = "none";

    // "CLEANING" PUMP INFO TEXT FOR NEXT SELECTION
    document.getElementById("c").innerHTML = "";
    document.getElementById("SPM").innerHTML = "";
    document.getElementById("DHSL").innerHTML = "";
    document.getElementById("ideal").innerHTML = "";
    document.getElementById("pumpEff").innerHTML = "";
    document.getElementById("pumpDepth").innerHTML = "";
    document.getElementById("GFLAP").innerHTML = "";
    document.getElementById("Inc").innerHTML = "";
    document.getElementById("notPumping").innerHTML = "";


  }
  

  d3.json("../data/pumpInfo.json").then((pumpData) => {
    var pumpingInfoToShow = {
      "Well Name": "doesn'scale exist because it is not pumping",
    };
    pumpData.forEach((pumpingWell) => {
      if (pumpingWell["Well Name"].includes(selectedOption)) {
        pumpingInfoToShow = pumpingWell;
      }
    });
    if (
      pumpingInfoToShow["Well Name"].includes(selectedOption) &&
      pumpingInfoToShow["SPM"] !== 0
    ) {
      //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo
      $(document).ready(function () {
        $("#pumpInfo").toggle();
      });
      //SHOW HIDDEN BUTTONS
      if (region != "ET"){
        document.getElementById("c").innerHTML = "C: " + pumpingInfoToShow["C"];
        document.getElementById("SPM").innerHTML =
          "SPM: " + pumpingInfoToShow["SPM"];
        document.getElementById("DHSL").innerHTML =
          "DH SL: " + pumpingInfoToShow["DH SL"];
        document.getElementById("ideal").innerHTML =
          "Ideal bfpd: " + pumpingInfoToShow["Ideal bfpd"];
        document.getElementById("pumpEff").innerHTML =
          "Pump Eff: " + pumpingInfoToShow["Pump Eff"]; //multiply by 100
        document.getElementById("pumpDepth").innerHTML =
          "Pump Depth: " + pumpingInfoToShow["Pump Depth"];
        document.getElementById("GFLAP").innerHTML =
          "GFLAP: " + pumpingInfoToShow["GFLAP"];
        document.getElementById("Inc").innerHTML =
          "Inc: " + pumpingInfoToShow["Inc"];

      }
      
    } else {
      $(document).ready(function () {
        $("#notPumpingInfo").toggle();
        $("#notPumping").html("This well is not pumping");
      });
    }
  });
  //READ IN ECONOMICS DATA
  d3.json("../data/economics.json").then((economicsData) => {
    //console.log(economicsData[0])
    let wellRMPL = 0;
    let wellYTDPL = 0;
    let monthPnL = "";
    console.log(economicsData);
    economicsData.forEach((ecoWell) => {
      if (ecoWell["Well Name"].includes(selectedOption)) {
        wellRMPL = ecoWell["Recent Month P&L"];
        wellYTDPL = ecoWell["YTD P&L"];
        monthPnL = ecoWell["Date"].slice(0, 3);
      }
    });
    //DISPLAY ECONOMICS DATA
    if (region != "ET"){
      document.getElementById("pnl").innerHTML =
      "P&L : " +
      "$" +
      wellRMPL
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      " " +
      monthPnL;
      //document.getElementById("monthly").innerHTML = "$"+ wellRMPL.toLocaleString("en-US")+" "+ monthPnL;
      document.getElementById("YTD").innerHTML =
        "$" +
        wellYTDPL
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " YTD";

    }
    
  });

  //READ IN PAYOUT DATA
  d3.json("../data/payouts.json").then((payoutsData) => {
    var payout100 = 0;
    payoutsData.forEach((payoutWell) => {
      if (payoutWell["Well Name"].includes(selectedOption)) {
        payout100 = payoutWell["% Payout"] * 100;
      }
    });
    //DISPLAY ECONOMICS DATA
    if (region != "ET"){
      document.getElementById("payout").innerHTML =
      "Payout : " + payout100.toFixed(0).toLocaleString("en-US") + "%";
    //document.getElementById("payout100").innerHTML = payout100.toFixed(0).toLocaleString("en-US")+ "%";

    }
    
  });

  d3.json("../data/allProductionData"+region+".json").then((data) => {

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
    const config = {
      modeBarButtonsToRemove: [
        "sendDataToCloud",
        "autoScale2d",
        "hoverClosestCartesian",
        "hoverCompareCartesian",
        "lasso2d",
        "zoomIn2d",
        "zoomOut2d",
        "toggleSpikelines",
      ],
      displaylogo: false,
      responsive: true,
    }; //, 'select2d' , 'zoom2d'

    var dataOilnorm = {
      x: site_date,
      y: site_oil,
      text: comments,
      name: "Oil",
      line: { color: "green" },
    };

    var dataOilmoving = {
      x: site_date,
      y: movingAverage,
      type: "line",
      name: "7 Day Avg",
      line: { dash: "dot" },
    };

    var dataGas = {
      x: site_date,
      y: site_gas,
      type: "line",
      name: "Gas [Mcf]",
      line: { color: "red" },
    };
    var dataWater = {
      x: site_date,
      y: site_water,
      type: "line",
      name: "Water [Mbw]",
      line: { color: "blue" },
    };
    let dataCut = [
      {
        x: site_date,
        y: water_cut,
        line: { color: "#25C4DC" },
      },
    ];

    var layoutCut = {
      autosize: true,
      title: { text: "Water Cut Percentage" },
      yaxis: {
        type: "linear",
        autorange: true,
        tickformat: "f",
      },
      xaxis: {
        gridcolor: "#dbdbdb",
      },
    };
    var layoutLog = {
      title: "Fluids Produced vs Times",
      yaxis: {
        type: "log",
        range: [0, 3],
        tickvals: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000],
        gridcolor: "#dbdbdb",
      },
      xaxis: {
        gridcolor: "#dbdbdb",
      },
    };

    var layoutOil = {
      title: "Oil (BOPD) vs Time",
      yaxis: {
        type: scale,
        rangemode: "tozero",
        autorange: true,
        gridcolor: "#dbdbdb",
      },
      xaxis: {
        gridcolor: "#dbdbdb",
      },
      legend: {
        x: 1,
        xanchor: "right",
        y: 1.2,
      },
    };
    var layoutGas = {
      title: "Gas (MCFD) vs Time",
      yaxis: {
        type: scale,
        rangemode: "tozero",
        gridcolor: "#dbdbdb",
      },
      xaxis: {
        gridcolor: "#dbdbdb",
      },
    };
    var layoutWater = {
      title: "Water (BWPD) vs Time",
      yaxis: {
        type: scale,
        rangemode: "tozero",
        gridcolor: "#dbdbdb",
      },
      xaxis: {
        gridcolor: "#dbdbdb",
      },
    };

    //var dataOil = [dataOilnorm, dataOilmoving];
    //var fluidData = [dataOilnorm, dataGas, dataWater]

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
    document
      .getElementById("oilDeclineCurve")
      .on("plotly_relayout", function (eventdata) {
        JSON.stringify(eventdata);
        site_date.forEach((i, el) => {
          site_date[el] = site_date[el].substring(0, 10);
        }); //newer dates are at beginning of array

        let indexStart;
        let indexEnd;
        if (eventdata["xaxis.range[0]"] == null) {
          //dbl clicked
          indexStart = site_date.length - 1;
          indexEnd = 0;
        } else if (
          //zoomed where no data
          site_date.indexOf(eventdata["xaxis.range[0]"].substring(0, 10)) == -1
        ) {
          indexStart = site_date.length - 1;
          indexEnd = site_date.indexOf(
            eventdata["xaxis.range[1]"].substring(0, 10)
          );
        } else {
          indexStart = site_date.indexOf(
            eventdata["xaxis.range[0]"].substring(0, 10)
          );
          indexEnd = site_date.indexOf(
            eventdata["xaxis.range[1]"].substring(0, 10)
          );
        }

        function calc(array, i1, i2) {
          let tot = 0;

          array.slice(i1, i2 + 1).forEach((el) => {
            tot += el;
          });
          
          return tot;
        }

        let sum = calc(site_oil, indexEnd, indexStart);
        xx = "Produced: ";
        document.getElementById("zoomOil").innerHTML =
          xx +
          (sum / 1000).toFixed(1) +
          " MBO, from " +
          site_date[indexStart] +
          " to " +
          site_date[indexEnd];
        document.getElementById("zoomOil").style.visibility = "visible";
      });

    document.getElementById("siteSelection").focus();
    document.getElementById("filler4").style.display = "none";
    d3.json("../data/cumProd.json").then((cumData) => {
      let selectedWellCum = 0;
      let selectedWellGasCum = 0;
      let selectedWellWaterCum;
      let selectedWellFormation = "";
      let totalWater = Math.round(
        site_water.reduce((partialSum, a) => partialSum + a, 0) / 1000
      ); //updates when time frame changes

      cumData.forEach((wellCum) => {
        if (selectedOption === wellCum[0]) {
          selectedWellCum = wellCum[1];
          selectedWellGasCum = wellCum[3];
          selectedWellWaterCum = wellCum[2];
          selectedWellFormation = wellCum[4];
        }
      });
      if (selectedWellFormation == "") {
        document.getElementById("filler4").style.display = "";
      }

      document.getElementById("formation").innerHTML = selectedWellFormation;
      document.getElementById("cumlativeData").innerHTML =
        "Cumulative: " +
        selectedWellCum +
        " MBO, " +
        selectedWellGasCum +
        " MMCF, " +
        (selectedWellWaterCum + " MBW");
    });
  });
}

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
  let tableData = await d3.json("../data/allProductionData"+region+".json");
  buildTable(tableData)
  function buildTable(allData) {
    tbody = d3.select("tbody");
    tbody.html("");
    if (selectedOption == "default"){
      selectedOption = "Aaron #1"
    }
    allData.forEach((well) => {
      if (well[0] == selectedOption){
        well.shift()
        well.splice(well.length-2,2)
  
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
}

//Main//
createDropdownOptions();
d3.select("#siteSelection").on("change", () => {
  setActive("linear", "Days30");
  Curve(31);
});
//Graph LISTENERS//
d3.select("#linear").on("click", () => {
  setActive("linear", "DaysInception");
  Curve(0);
});
d3.select("#logarithmic").on("click", () => {
  setActive("logarithmic", "DaysInception");
  Curve(0);
});
d3.select("#DaysInception").on("click", () => {
  setActiveTime("DaysInception");
  Curve(0);
});
d3.select("#Days30").on("click", () => {
  setActiveTime("Days30");
  Curve(31);
});
d3.select("#Days180").on("click", () => {
  setActiveTime("Days180");
  Curve(181);
});
d3.select("#Days365").on("click", () => {
  setActiveTime("Days365");
  Curve(366);
});

//TABLE LISTENER//
d3.select("#table").on("click", () => {
  setActive("table", "DaysInception");
  table();
});

//init page on load//
window.on("load", setActive("linear", "DaysInception"), Curve(0));