//dyn underline active buttons//
function activeLine(tag, id) {
  for (let i = 0; i < tag.length; i++) {
    tag[i].addEventListener("click", function () {
      var current = document
        .getElementById(id)
        .getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }
}

function resetActive(view, time) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    el.classList.remove("active");
  });
  document.getElementById(view).className += "active";
  document.getElementById(time).className += "active";
}

//Gets oil Price//
async function getOilPrice() {
  //var token = config.MY_API_TOKEN;//sets My api token from config var in config.js = token
  //let response = await fetch('https://commodities-api.com/api/latest?access_key=' + token + '&base=USD&symbols=WTIOIL');//makes promise to get get response
  //let data = await response.json()//converts json(vaule : pairs) data into js object
  //console.log(data)//request limit may be reached
  //return data;
}
//getOilPrice().then(data => document.getElementById("WTIOIL").innerHTML = "WTI: $" + (1 / data.data.rates.WTIOIL).toFixed(2));

//Creates Dropdown//
function createDropdownOptions() {
  var partnerSelector = d3.select("#siteSelection"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR, find id:siteselection in curves.html
  d3.json("./static/allProductionData.json").then((allData) => {
    //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
    repeatedWells = []; //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
    allData.forEach((row) => {
      //LOOP THROUGH NET_INTEREST FILE, calls method element in array: array.foreach(function)
      repeatedWells.push(row[0]); //PUSH ALL PARTNER'S NAME TO LIST
    });

    wells = [...new Set(repeatedWells)].sort(); //CREATE A UNIQUE LIST OF ALL WELLS AND SORT
    wells.forEach((well) => {
      //FOR EACH OF THE UNIQUE WELLS, CREATE AN OPTION FOR THE DROP DOWN
      partnerSelector.append("option").text(well).property("Value", well);
    });
  });
}

//Creates Graphs//
function Curve(timeFrame, scale) {
  if (d3.select("#siteSelection").node().value != "default") {
    //clicked on well in dropdown
    let dropdownMenu = d3.select("#siteSelection").node();
    selectedOption = dropdownMenu.value;
    sessionStorage.removeItem("siteSelection");
  } else if (sessionStorage.getItem("siteSelection") != null) {
    //redirected from anaylze
    selectedOption = sessionStorage.getItem("siteSelection");
    console.log(selectedOption);
  }
  resetActive("linear", "Inception");

  document.getElementById("zoomOil").style.visibility = "hidden"; //dont display old zoom data if switching b/t wells/timeframes

  document.getElementById("wellName").innerHTML = selectedOption;

  //HIDE PUMPING INFO  SINCE THEY WILL BE SHOWING FROM PREVIOUS SELECTION
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

  d3.json("./static/allProductionData.json").then((data) => {
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
      name: "Gas [MMcf]",
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
    };
    var layoutLog = {
      title: "Fluids Produced vs Times",
      yaxis: {
        type: "log",
        range: [0, 3],
        tickvals: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000],
      },
    };

    var layoutOil = {
      title: "Oil (BOPD) vs Time",
      yaxis: {
        type: scale,
        rangemode: "tozero",
        autorange: true,
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
      },
    };
    var layoutWater = {
      title: "Water (BWPD) vs Time",
      yaxis: {
        type: scale,
        rangemode: "tozero",
      },
    };

    var dataOil = [dataOilnorm, dataOilmoving];
    //var fluidData = [dataOilnorm, dataGas, dataWater]

    if (scale == "log") {
      //Plotly.newPlot("fluidCurve", fluidData, layoutLog, config);
      Plotly.newPlot("oilDeclineCurve", dataOil, layoutLog, {
        showSendToCloud: true,
      });
      Plotly.newPlot("gasDeclineCurve", [dataGas], layoutLog, config);
      Plotly.newPlot("waterDeclineCurve", [dataWater], layoutLog, config);
    } else {
      //Plotly.newPlot("fluidCurve", fluidData, layoutOver, config);
      Plotly.newPlot("oilDeclineCurve", dataOil, layoutOil, config);
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
          console.log("tot :>> ", tot);
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

    if (timeFrame === 0 && scale === "log") {
      var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR
      showCurves.style.display = "";

      var hideLinear = document.getElementById("timeframes");
      hideLinear.style.display = "none";

      var showLog = document.getElementById("timeframesLog");
      showLog.style.display = "";

      var hidetable = document.getElementById("individualTable");
      hidetable.style.display = "none";
    } else if (timeFrame === 0 && scale === "linear") {
      var hideLog = document.getElementById("timeframesLog");
      hideLog.style.display = "none";

      var showLinear = document.getElementById("timeframes");
      showLinear.style.display = "";

      var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR?
      showCurves.style.display = "";

      var hidetable = document.getElementById("individualTable");
      hidetable.style.display = "none";
    }

    document.getElementById("siteSelection").focus();
    document.getElementById("filler4").style.display = "none";
    d3.json("./static/cumProd.json").then((cumData) => {
      let selectedWellCum = 0;
      let selectedWellGasCum = 0;
      let selectedWellFormation = "";
      let totalWater = Math.round(
        site_water.reduce((partialSum, a) => partialSum + a, 0) / 1000
      );

      cumData.forEach((wellCum) => {
        if (selectedOption === wellCum[0]) {
          selectedWellCum = wellCum[1];
          selectedWellGasCum = wellCum[3];
          selectedWellFormation = wellCum[4];
        }
      });
      if (selectedWellFormation == ""){
        document.getElementById("filler4").style.display = "";
      }
      
      document.getElementById("formation").innerHTML = selectedWellFormation;
      document.getElementById("cumlativeData").innerHTML =
        "Cumulative: " +
        selectedWellCum +
        " MBO, " +
        selectedWellGasCum +
        " MMCF, " +
        (totalWater + " MBW");
    });
  });
  d3.json("./static/pumpInfo.json").then((pumpData) => {
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
    } else {
      $(document).ready(function () {
        $("#notPumpingInfo").toggle();
        $("#notPumping").html("This well is not pumping");
      });
    }
  });
  //READ IN ECONOMICS DATA
  d3.json("./static/economics.json").then((economicsData) => {
    //console.log(economicsData[0])
    var wellRMPL = 0;
    var wellYTDPL = 0;
    monthPnL = "";
    economicsData.forEach((ecoWell) => {
      if (ecoWell["Well Name"].includes(selectedOption)) {
        wellRMPL = ecoWell["Recent Month P&L"];
        wellYTDPL = ecoWell["YTD P&L"];
        monthPnL = ecoWell["Date"].slice(0, 3);
      }
    });
    //DISPLAY ECONOMICS DATA
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
  });

  //READ IN PAYOUT DATA
  d3.json("./static/payouts.json").then((payoutsData) => {
    var payout100 = 0;
    payoutsData.forEach((payoutWell) => {
      if (payoutWell["Well Name"].includes(selectedOption)) {
        payout100 = payoutWell["% Payout"] * 100;
      }
    });
    //DISPLAY ECONOMICS DATA
    document.getElementById("payout").innerHTML =
      "Payout : " + payout100.toFixed(0).toLocaleString("en-US") + "%";
    //document.getElementById("payout100").innerHTML = payout100.toFixed(0).toLocaleString("en-US")+ "%";
  });
}

//Creates Table//
function table() {
  //SELECT <select> TO LATER "GRAB" THE SELECTION MADE AS TEXTS
  var dropdownMenu = d3.select("#siteSelection").node();
  //DECLARE ITEM SAVED IN STORAGE
  var clickedFromAnalyzed = sessionStorage.getItem("siteSelection");
  //DECLARE WHAT WILL BE SAVED AS THE SELECTION
  var selectedOption = "";
  //USE TO DETERMINE SELECTION USED TO CREATE TABLE
  if (clickedFromAnalyzed == null) {
    //IF NOTHING IN STORAGE USE dropdown.value TO CREATE TABLE
    selectedOption = dropdownMenu.value;
  } else {
    //IF STORAGE IS NOT NULL, TEXT IN STORAGE IS USED TO CREATE TABLE
    selectedOption = clickedFromAnalyzed;
  }
  //READ IN FILE WITH DATA FOR TABLE
  d3.json("./static/allProductionData.json").then((data) => {
    tableData = data;
    tbody = d3.select("tbody");
    tbody.html("");
    tableData.forEach((well) => {
      if (well[0] === selectedOption) {
        let row = tbody.append("tr");
        Object.values(well.splice(1, 7)).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
        });
      }
    });
    // //HIDE CURVES & BUTTONS, SHOW TABLE
    $(document).ready(function () {
      $("#individualTable").toggle();
      // $("#curves").toggle();
      $("#timeframesLog").toggle();
      $("#timeframes").toggle();
      var hideCurves = document.getElementById("curves");
      hideCurves.style.display = "";
    });
  });
}

//Main//
createDropdownOptions();
d3.select("#siteSelection").on("change", () => {
  Curve((timeFrame = 0), (scale = "linear"));
});
activeLine(document.getElementById("view").getElementsByTagName("a"), "view");
activeLine(
  document.getElementById("timeframes").getElementsByTagName("a"),
  "timeframes"
);
activeLine(
  document.getElementById("timeframesLog").getElementsByTagName("a"),
  "timeframesLog"
);

//LINEAR LISTENERS//
d3.select("#linear").on("click", () => {
  Curve((timeFrame = 0), (scale = "linear"));
  resetActive("linear", "Inception");
});
d3.select("#Inception").on("click", () => {
  Curve((timeFrame = 0), (scale = "linear"));
});
d3.select("#Days30").on("click", () => {
  Curve((timeFrame = 31), (scale = "linear"));
});
d3.select("#Days180").on("click", () => {
  Curve((timeFrame = 181), (scale = "linear"));
});
d3.select("#Days365").on("click", () => {
  Curve((timeFrame = 366), (scale = "linear"));
});

//LOG LISTENERS//
d3.select("#logarithmic").on("click", () => {
  Curve((timeFrame = 0), (scale = "log"));
  resetActive("logarithmic", "InceptionLog");
});
d3.select("#InceptionLog").on("click", () => {
  Curve((timeFrame = 0), (scale = "log"));
});
d3.select("#Days30Log").on("click", () => {
  Curve((timeFrame = 31), (scale = "log"));
});
d3.select("#Days180Log").on("click", () => {
  Curve((timeFrame = 181), (scale = "log"));
});
d3.select("#Days365Log").on("click", () => {
  Curve((timeFrame = 366), (scale = "log"));
});

//TABLE LISTENER//
d3.select("#table").on("click", () => {
  table();
});

//Redirected from Analyze//
$(window).on("load", Curve((timeFrame = 31), (scale = "linear")),resetActive("linear", "Days30"));

// Get the container element
