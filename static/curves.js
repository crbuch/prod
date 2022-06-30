async function getOilPrice() {
  //var token = config.MY_API_TOKEN;//sets My api token from config var in config.js = token
  //console.log(token);
  // Add new token
  //let response = await fetch('https://commodities-api.com/api/latest?access_key='+token+'&base=USD&symbols=WTIOIL');//makes promise to get get response
  //let data = await response.json()//converts json(vaule : pairs) data into js object
  //console.log(data);
  //return data;
}
//getOilPrice().then(data => document.getElementById("WTIOIL").innerHTML = "WTI: $" + (1/data.data.rates.WTIOIL).toFixed(2));//calls promise w/ .then changes vaule of HTML id='WTIOIL' rate found w/ 2 decimals

// FUNCTON TO CREATE WELL OPTIONS DROP DOWN
function createDropdownOptions() {
  var partnerSelector = d3.select("#siteSelection"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR, find id:siteselection in curves.html 
  d3.json("./static/allProductionData.json").then((allData) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
    repeatedWells = [] //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
    allData.forEach((row) => { //LOOP THROUGH NET_INTEREST FILE, calls method element in array: array.foreach(function)
    repeatedWells.push(row[0]) //PUSH ALL PARTNER'S NAME TO LIST 
  });
  
  wells = [...new Set(repeatedWells)].sort() //CREATE A UNIQUE LIST OF ALL WELLS AND SORT
  wells.forEach((well) => { //FOR EACH OF THE UNIQUE WELLS, CREATE AN OPTION FOR THE DROP DOWN
    partnerSelector
    .append('option')
    .text(well)
    .property('Value', well)
  });
});
};
//CALL FUNCTION TO CREATE DROPDOWN MENU VALUES
createDropdownOptions();

// LISTENER FOR CHANGE ON DROP DOWN MENU
d3.select("#siteSelection").on('change', function() {Curve(d=0,t='linear');}); 

//FUNCTION TO POPULATE CURVE BASED ON ANALYZE CLICK
function ClickedFromAnalyze(d,t)
{
  var clickedFromAnalyzed = sessionStorage.getItem("siteSelection");//gets name of well clicked on in dropdown

if(document.activeElement == document.body){//element in focuses ==
  selectedOption = clickedFromAnalyzed;
  //console.log("body", selectedOption);
}
else{
  sessionStorage.removeItem("siteSelection")
  var dropdownMenu = d3.select("#siteSelection").node();
    //var referrerURL = document.referrer
    selectedOption = dropdownMenu.value;
    //console.log("else", selectedOption);
}
  if(clickedFromAnalyzed == null)
  {
    //console.log("hello");
  }
  else
  {
    //var selectedOption = clickedFromAnalyzed //EQUAL STORED VALUE TO selectedOption (USED TO CREATE CURVES)
    document.getElementById("wellName").innerHTML =  selectedOption //SHOW WELL NAME
    var previousPumpInfo = document.getElementById("pumpInfo"); //HIDE PUMPING INFO BUTTONS
    previousPumpInfo.style.display = "none"
    var previousNotPumpingInfo = document.getElementById("notPumpingInfo") //HIDE NON-PUMPING INFO BUTTONS
    previousNotPumpingInfo.style.display = "none"
  // "CLEAR" PUMP INFO TEXT FOR NEXT SELECTION
  document.getElementById("c").innerHTML =  "";
  document.getElementById("SPM").innerHTML =  "";
  document.getElementById("DHSL").innerHTML =  "";
  document.getElementById("ideal").innerHTML =  "";
  document.getElementById("pumpEff").innerHTML =  "";
  document.getElementById("pumpDepth").innerHTML =  "";
  document.getElementById("GFLAP").innerHTML =  "";
  document.getElementById("Inc").innerHTML =  "";
  document.getElementById("notPumping").innerHTML =  "";

  console.log(selectedOption);
  
  d3.json("./static/allProductionData.json").then((data) =>{ 
    var site_oil = [];
    var site_gas = [];
    var site_water = [];
    var site_date = [];
    var comments = [];
    var movingAverage = [];

    data.forEach((site) => {if(site[0] === selectedOption){
     site_date.push(site[9]);
      site_oil.push(site[2]);
      site_gas.push(site[3]);
      site_water.push(site[4]);
      comments.push(site[7]);
      movingAverage.push(site[8])
    };
  });

  
  
  if (d > 0){
    var site_date = site_date.slice(0,d);
    var site_oil = site_oil.slice(0,d);
    var site_gas = site_gas.slice(0,d);
    var site_water = site_water.slice(0,d);
    var comments = comments.slice(0,d);
    var movingAverage = movingAverage.slice(0,d);
  }
  
  var dataOil = {
    x: site_date,
    y: site_oil,
    text: comments,
    name: "Oil",
    line:
    {color: "green"}
  };

  var dataMoving = {
    x: site_date,
    y: movingAverage,
    type: "line",
    name: "7 Day Avg",
    line:
    {dash: "dot"}
  }; 

  var data = [dataOil, dataMoving];

  var layoutOil = {
    title: "Oil (BOPD) vs Time",
    yaxis: {
      type: t,
      rangemode: 'tozero'
      // autorange: true
    },
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1.2
    }
  };

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //'select2d' , 'zoom2d'

  Plotly.newPlot("oilDeclineCurve", data, layoutOil, config);
  
  var dataGas = [{
    x: site_date,
    y: site_gas,
    text: comments,
    line:
    {color: "red"}
  }];
  var layoutGas = {
    title: "Gas (MCFD) vs Time",
    yaxis: {
      type: t,
      rangemode: 'tozero'
    }
  };

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //'select2d', 'zoom2d'

  Plotly.newPlot("gasDeclineCurve", dataGas, layoutGas, config);
  
  var dataWater = [{
    x: site_date,
    y: site_water,
    text: comments,
    type: "line"
  }];
  var layoutWater = {
    title: "Water (BWPD) vs Time",
    yaxis: {
      type: t,
      rangemode: 'tozero'
    }
  };

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //, 'zoom2d', 'zoomIn2d'

  Plotly.newPlot("waterDeclineCurve", dataWater, layoutWater, config);
    
  if(d===0 && t==='log'){  //HIDE BUTTONS RELATED TO LINEAR FORMAT
    var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR? 
    showCurves.style.display = ""

    var hideLinear = document.getElementById("timeframes");
    hideLinear.style.display = "none";

    var showLog = document.getElementById("timeframesLog");
    showLog.style.display = "";

    var hidetable = document.getElementById("individualTable");
    hidetable.style.display = "none"; 
  } 
  else if(d===0 && t==='linear'){ //HIDE BUTTONS RELATED TO LOG FORMAT
    var hideLog = document.getElementById("timeframesLog");
    hideLog.style.display = "none";

    var showLinear = document.getElementById("timeframes");
    showLinear.style.display = "";

    var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR?
    showCurves.style.display = ""

    var hidetable = document.getElementById("individualTable");
    hidetable.style.display = "none";
  } 

  console.log(typeof site_date[0])
})

//MAKE SELECT ACTIVE AFTER A BUTTON IS PRESSED SO IT CAN BE ACCESSED VIA THE KEYBOAR
document.getElementById("siteSelection").focus();

// DISPLAY CUM DATA UNDER WELL NAME
d3.json("./static/cumProd.json").then((cumData) => {
  //console.log(cumData.getOwnPropertyNames()) // <-- USED TO FIGURE OUT HOW TO READ IN EACH COLUMN
  
  var selectedWellCum = 0;
  var selectedWellGasCum = 0;
  var selectedWellFormation = "";
  cumData.forEach(wellCum=> {
    
    if(selectedOption ===  wellCum[0]){
      selectedWellCum = wellCum[1];
      selectedWellGasCum = wellCum[3]
      selectedWellFormation = wellCum[4]
    }
  })
  document.getElementById("cumCurve").innerHTML = "Cum: "+ selectedWellCum + " MBBLS, " + selectedWellGasCum + " MMCF";
  document.getElementById("formation").innerHTML = selectedWellFormation;
})
//READ PUMPING INFO
d3.json("./static/pumpInfo.json").then((pumpData) => {
 
  var pumpingInfoToShow = {"Well Name": "doesn't exist because it is not pumping"};
  pumpData.forEach((pumpingWell) => {
if(pumpingWell["Well Name"].includes(selectedOption)){
  pumpingInfoToShow = pumpingWell;
}
  }) 
  if(pumpingInfoToShow["Well Name"].includes(selectedOption) && pumpingInfoToShow["SPM"] !== 0){
    $(document).ready(function() { //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo
      $("#pumpInfo").toggle(); //SHOW PUMP INFO BUTTONS
  }); // ASSIGN DESIGNATED TEXT TO EACH PUMP INFO BUTTON
        document.getElementById("c").innerHTML =  "C: " + pumpingInfoToShow["C"]
        document.getElementById("SPM").innerHTML =  "SPM: " + pumpingInfoToShow["SPM"]
        document.getElementById("DHSL").innerHTML =  "DH SL: "+ pumpingInfoToShow["DH SL"]
        document.getElementById("ideal").innerHTML =  "Ideal bfpd: " + pumpingInfoToShow["Ideal bfpd"]
        document.getElementById("pumpEff").innerHTML =  "Pump Eff: "+ pumpingInfoToShow["Pump Eff"] //multiply by 100
        document.getElementById("pumpDepth").innerHTML =  "Pump Depth: " + pumpingInfoToShow["Pump Depth"] 
        document.getElementById("GFLAP").innerHTML =  "GFLAP: " + pumpingInfoToShow["GFLAP"]
        document.getElementById("Inc").innerHTML =  "Inc: "+ pumpingInfoToShow["Inc"]
  }
  else { 
  $(document).ready(function() {
    $("#notPumpingInfo").toggle(); //SHOW WELL IS NOT PUMPING BUTTON
    $("#notPumping").html("This well is not pumping");
});
}
})

}; //END OF ELSE STATEMENT

};
//console.log(sessionStorage.getItem("siteSelection"))
// LISTENER FOR PAGE TO LOAD TO CREATE CURVE FROM ANALYZE TABLE
$( window ).on( "load", ClickedFromAnalyze );


//FUNCTION FOR CURVES//
function Curve(d,t){

  //var referrerURL = document.referrer;
  //console.log(referrerURL);
//CLEAR STORED VALUES
 sessionStorage.removeItem("siteSelection")
    var dropdownMenu = d3.select("#siteSelection").node();
    //var referrerURL = document.referrer

    
    var selectedOption = dropdownMenu.value;
    //DO NOT NEED TO SHOW WELL NAME HERE SINCE IT IS IN THE DROPDOWN SELECT, 
    //BUT NEED TO FIGURE OUT BEST WAY TO DEAL WITH IT
    //document.getElementById("wellName").innerHTML =  selectedOption //DISPLAY WELL'S NAME
    //HIDE PUMPING INFO  SINCE THEY WILL BE SHOWING FROM PREVIOUS SELECTION
    var previousPumpInfo = document.getElementById("pumpInfo");
    previousPumpInfo.style.display = "none"
  
    var previousNotPumpingInfo = document.getElementById("notPumpingInfo")
    previousNotPumpingInfo.style.display = "none"
  
    // "CLEANING" PUMP INFO TEXT FOR NEXT SELECTION
    document.getElementById("c").innerHTML =  "";
    document.getElementById("SPM").innerHTML =  "";
    document.getElementById("DHSL").innerHTML =  "";
    document.getElementById("ideal").innerHTML =  "";
    document.getElementById("pumpEff").innerHTML =  "";
    document.getElementById("pumpDepth").innerHTML =  "";
    document.getElementById("GFLAP").innerHTML =  "";
    document.getElementById("Inc").innerHTML =  "";
    document.getElementById("notPumping").innerHTML =  "";
  
    console.log(selectedOption);
    
    d3.json("./static/allProductionData.json").then((data) =>{ 
      var site_oil = [];
      var site_gas = [];
      var site_water = [];
      var site_date = [];
      var comments = [];
      var movingAverage = [];
      let water_cut = [];
  
      data.forEach((site) => {if(site[0] === selectedOption){
       site_date.push(site[9]);
        site_oil.push(site[2]);
        site_gas.push(site[3]);
        site_water.push(site[4]);
        comments.push(site[7]);
        movingAverage.push(site[8])
        water_cut.push((site[4]/(site[4]+site[2]))*100)
      };
    });
    
    if (d > 0){
      var site_date = site_date.slice(0,d);
      var site_oil = site_oil.slice(0,d);
      var site_gas = site_gas.slice(0,d);
      var site_water = site_water.slice(0,d);
      var comments = comments.slice(0,d);
      var movingAverage = movingAverage.slice(0,d);
    }
  
    var dataOil = {
      x: site_date,
      y: site_oil,
      text: comments,
      name: "Oil",
      line:
      {color: "green"}
    };
  
    var dataMoving = {
      x: site_date,
      y: movingAverage,
      type: "line",
      name: "7 Day Avg",
      line:
      {dash: "dot"}
    }; 
  
    var data = [dataOil, dataMoving];
  
    var layoutOil = {
      title: "Oil (BOPD) vs Time",
      yaxis: {
        type: t,
        rangemode: 'tozero'
        // autorange: true
      },
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1.2
      }
    };
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //, 'select2d' , 'zoom2d'
  
    Plotly.newPlot("oilDeclineCurve", data, layoutOil, config);
    
    var dataGas = [{
      x: site_date,
      y: site_gas,
      text: comments,
      line:
      {color: "red"}
    }];
    var layoutGas = {
      title: "Gas (MCFD) vs Time",
      yaxis: {
        type: t,
        rangemode: 'tozero'
      }
    };
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //, 'select2d', 'zoom2d'
  
    Plotly.newPlot("gasDeclineCurve", dataGas, layoutGas, config);
    
    var dataWater = [{
      x: site_date,
      y: site_water,
      text: comments,
    }];
    var layoutWater = {
      title: "Water (BWPD) vs Time",
      yaxis: {
        type: t,
        rangemode: 'tozero'
      },
      
    };
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; //'select2d', 'zoom2d',
  
    Plotly.newPlot("waterDeclineCurve", dataWater, layoutWater, config);
    
    let dataCut = [{
      x: site_date,
      y: water_cut,
      line:
      {color: "#25C4DC"}
    }];
    let layoutCut = {
      autosize: true,
      title: {text:"Water Cut Percentage"},
      yaxis: {
        type: 'linear',
        autorange: true,
        tickformat: "f"
      }
    };
    Plotly.newPlot("waterCutCurve", dataCut, layoutCut, config)
  
    if(d===0 && t==='log'){
  
      var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR? 
      showCurves.style.display = ""
  
      var hideLinear = document.getElementById("timeframes");
      hideLinear.style.display = "none";
  
      var showLog = document.getElementById("timeframesLog");
      showLog.style.display = "";
  
      var hidetable = document.getElementById("individualTable");
      hidetable.style.display = "none"; 
    }
    else if(d===0 && t==='linear'){
      var hideLog = document.getElementById("timeframesLog");
      hideLog.style.display = "none";
  
      var showLinear = document.getElementById("timeframes");
      showLinear.style.display = "";
  
      var showCurves = document.getElementById("curves"); // CURVES IS INITIALLY DISPLAYED AS LINEAR?
      showCurves.style.display = ""
  
      var hidetable = document.getElementById("individualTable");
      hidetable.style.display = "none";
    }
  
  
  document.getElementById("siteSelection").focus();
  
  d3.json("./static/cumProd.json").then((cumData) => {
    var selectedWellCum = 0;
    var selectedWellGasCum = 0;
    var selectedWellFormation = "";
    let totalWater = Math.round((site_water.reduce((partialSum, a) => partialSum + a, 0))/1000);
    
    cumData.forEach(wellCum=> {
      if(selectedOption ===  wellCum[0]){
        selectedWellCum = wellCum[1];
        selectedWellGasCum = wellCum[3]
        selectedWellFormation = wellCum[4]
      }
    })

    document.getElementById("formation").innerHTML = selectedWellFormation;
    document.getElementById("cumCurve").innerHTML = "Cumulative: "+ selectedWellCum + " MBO, " + selectedWellGasCum + " MMCF, " + (totalWater + " MBW");
    
  
  });
  });
  d3.json("./static/pumpInfo.json").then((pumpData) => {
    var pumpingInfoToShow = {"Well Name": "doesn't exist because it is not pumping"};
    pumpData.forEach((pumpingWell) => {
  if(pumpingWell["Well Name"].includes(selectedOption)){
    pumpingInfoToShow = pumpingWell;
  }
    }) // 
    if(pumpingInfoToShow["Well Name"].includes(selectedOption) && pumpingInfoToShow["SPM"] !== 0){
   //USED jQuery LIBRARY TO TOGGLE THE DISPLAY OF #pumpInfo
      $(document).ready(function() {
        $("#pumpInfo").toggle();
    });
          //SHOW HIDDEN BUTTONS
          document.getElementById("c").innerHTML =  "C: " + pumpingInfoToShow["C"]
          document.getElementById("SPM").innerHTML =  "SPM: " + pumpingInfoToShow["SPM"]
          document.getElementById("DHSL").innerHTML =  "DH SL: "+ pumpingInfoToShow["DH SL"]
          document.getElementById("ideal").innerHTML =  "Ideal bfpd: " + pumpingInfoToShow["Ideal bfpd"]
          document.getElementById("pumpEff").innerHTML =  "Pump Eff: "+ pumpingInfoToShow["Pump Eff"] //multiply by 100
          document.getElementById("pumpDepth").innerHTML =  "Pump Depth: " + pumpingInfoToShow["Pump Depth"] 
          document.getElementById("GFLAP").innerHTML =  "GFLAP: " + pumpingInfoToShow["GFLAP"]
          document.getElementById("Inc").innerHTML =  "Inc: "+ pumpingInfoToShow["Inc"]
    }
    else {
    $(document).ready(function() {
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
      if(ecoWell["Well Name"].includes(selectedOption)) {
        wellRMPL = ecoWell["Recent Month P&L"];
        wellYTDPL = ecoWell["YTD P&L"];
        monthPnL= ecoWell["Date"].slice(0,3)+"."
        //console.log(wellRMPL);
        //console.log(wellYTDPL);
        //console.log(monthPnL);
      } 
        })
        //DISPLAY ECONOMICS DATA
    document.getElementById("pnl").innerHTML = "P&L : " + "$"+ wellRMPL.toLocaleString("en-US")+" "+ monthPnL;
    //document.getElementById("monthly").innerHTML = "$"+ wellRMPL.toLocaleString("en-US")+" "+ monthPnL;
    document.getElementById("YTD").innerHTML = "$" + wellYTDPL.toLocaleString("en-US")+ " YTD";
  })

  //READ IN PAYOUT DATA
  d3.json("./static/payouts.json").then((payoutsData) => {
    console.log(payoutsData[0])
    var payout100 = 0;
    payoutsData.forEach((payoutWell) => {
      if(payoutWell["Well Name"].includes(selectedOption)) {
        payout100 = payoutWell["% Payout"] * 100;
      } 
        })
        //DISPLAY ECONOMICS DATA
    document.getElementById("payout").innerHTML = "Payout : " + payout100.toFixed(0).toLocaleString("en-US")+ "%";
    //document.getElementById("payout100").innerHTML = payout100.toFixed(0).toLocaleString("en-US")+ "%";
  })

};

function table() {
  //SELECT <select> TO LATER "GRAB" THE SELECTION MADE AS TEXTS
  var dropdownMenu = d3.select("#siteSelection").node();
  //DECLARE ITEM SAVED IN STORAGE
  var clickedFromAnalyzed = sessionStorage.getItem("siteSelection");
  //DECLARE WHAT WILL BE SAVED AS THE SELECTION
  var selectedOption = "";
  //USE TO DETERMINE SELECTION USED TO CREATE TABLE
 if(clickedFromAnalyzed == null) //IF NOTHING IN STORAGE USE dropdown.value TO CREATE TABLE
  {
    selectedOption = dropdownMenu.value; 
  }
  else{ //IF STORAGE IS NOT NULL, TEXT IN STORAGE IS USED TO CREATE TABLE
   selectedOption = clickedFromAnalyzed;
  }
  //READ IN FILE WITH DATA FOR TABLE
    d3.json("./static/allProductionData.json").then((data) => {
      tableData = data;
      tbody = d3.select("tbody");
      tbody.html("");
      tableData.forEach((well) => 
      {if(well[0] === selectedOption){
        let row = tbody.append("tr");
        Object.values(well.splice(1,7)).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
        })
      }})
      // //HIDE CURVES & BUTTONS, SHOW TABLE
      $(document).ready(function() {
        $("#individualTable").toggle();
       // $("#curves").toggle();
        $("#timeframesLog").toggle();
        $("#timeframes").toggle();
        var hideCurves = document.getElementById("curves");
       hideCurves.style.display = "";
    });
    })
};



//LINEAR LISTENERS//
d3.select("#linear").on('click', function() {Curve(d=0,t='linear');});
d3.select("#Inception").on('click', function() {Curve(d=0,t='linear');});
d3.select("#Days30").on('click', function() {Curve(d=31,t='linear');});
d3.select("#Days180").on('click', function() {Curve(d=181,t='linear');});
d3.select("#Days365").on('click', function() {Curve(d=366,t='linear');});

//LOG LISTENERS//
d3.select("#logarithmic").on('click', function() {Curve(d=0,t='log');});
d3.select("#InceptionLog").on('click', function() {Curve(d=0,t='log');});
d3.select("#Days30Log").on('click', function() {Curve(d=31,t='log');});
d3.select("#Days180Log").on('click',function() {Curve(d=181,t='log');});
d3.select("#Days365Log").on('click', function() {Curve(d=366,t='log');});

// LOG LISTENERS FROM ANALYZE //DONT HAVE 
//d3.select("#logarithmic").on('load', function() {Curve(d=0,t='log');});
//$( "#logarithmic" ).on( "click", function() {ClickedFromAnalyze(d=0,t='log');}  );

//TABLE LISTENERS //
d3.select("#table").on('click', function() {table()});

// $(document).ready(function() {
//   $("#siteSelection").click(sessionStorage.removeItem("siteSelection")); //SHOW WELL IS NOT PUMPING BUTTON
// });


