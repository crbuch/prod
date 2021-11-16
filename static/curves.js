// async function getOilPrice() {
//   var token = config.MY_API_TOKEN;
//   console.log(token);
//   let response = await fetch('https://commodities-api.com/api/latest?access_key='+token+'&base=USD&symbols=WTIOIL');
//   let data = await response.json()
//   console.log(data);
//   return data;
// }
// getOilPrice().then(data=> document.getElementById("WTIOIL").innerHTML = "WTI: $" + (1/data.data.rates.WTIOIL).toFixed(2)

// );

// FUNCTON TO CREATE WELL OPTIONS DROP DOWN
function createDropdownOptions() {
  var partnerSelector = d3.select("#siteSelection"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
  d3.json("./static/allProductionData.json").then((allData) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
    //console.log(allData[0])
    repeatedWells = [] //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
    allData.forEach((row) => { //LOOP THROUGH NET_INTEREST FILE
    repeatedWells.push(row[0]) //PUSH ALL PARTNER'S NAME TO LIST 
  });
  wells = [...new Set(repeatedWells)].sort()
  wells.forEach((well) => {
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
d3.select("#siteSelection").on('change', function() {Curve(d=0,t='linear');}); // this is the listener causing issues somehow

//FUNCTION TO POPULATE CURVE BASED ON ANALYZE CLICK
function ClickedFromAnalyze(d,t)
{var clickedFromAnalyzed = sessionStorage.getItem("siteSelection");
  console.log(clickedFromAnalyzed);
  if(clickedFromAnalyzed == null)
  {
    console.log("hello");
  }
  else
  {
    var selectedOption = clickedFromAnalyzed //EQUAL STORED VALUE TO selectedOption (USED TO CREATE CURVES)
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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; 

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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };

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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };

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
})

//MAKE SELECT ACTIVE AFTER A BUTTON IS PRESSED SO IT CAN BE ACCESSED VIA THE KEYBOAR
document.getElementById("siteSelection").focus();

// DISPLAY CUM DATA UNDER WELL NAME
d3.json("./static/cumProd.json").then((cumData) => {
  var selectedWellCum = 0;
  var selectedWellGasCum = 0;
  cumData.forEach(wellCum=> {
    if(selectedOption ===  wellCum[0]){
      selectedWellCum = wellCum[1];
      selectedWellGasCum = wellCum[3]
    }
  })
  document.getElementById("cumCurve").innerHTML = "Cum: "+ selectedWellCum + " MBBLS, " + selectedWellGasCum + " MMCF";
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
};


//sessionStorage.removeItem("siteSelection");//REMOVE ITEM FROM LOCAL STORAGE SO CURVE DOESNT POPULATE ON ITS OWN
}
console.log(sessionStorage.getItem("siteSelection"))
// LISTENER FOR PAGE TO LOAD TO CREATE CURVE FROM ANALYZE TABLE
$( window ).on( "load", ClickedFromAnalyze );


//FUNCTION FOR CURVES//
function Curve(d,t){

  $(document).ready(function() {
    // $("#siteSelection").change(sessionStorage.removeItem("siteSelection")); //SHOW WELL IS NOT PUMPING BUTTON
     $("#siteSelection").change(sessionStorage.clear()); //SHOW WELL IS NOT PUMPING BUTTON
   });
   //if storage is not null then clickedFromAnalyzed = sessionStorage.getItem("siteSelection")

  dropdownMenu = d3.select("#siteSelection").node();
 //var clickedFromAnalyzed = sessionStorage.getItem("siteSelection") //HERE IS THE ISSUE?
 //console.log(clickedFromAnalyzed, "hello")
 //console.log("TEST", sessionStorage.getItem("siteSelection"))

 d3.select("#siteSelection").on('change', sessionStorage.removeItem("siteSelection"));//REMOVE ITEM FROM LOCAL STORAGE SO CURVE DOESNT POPULATE ON ITS OWN)
 var clickedFromAnalyzed = sessionStorage.getItem("siteSelection") //HERE IS THE ISSUE?
  //only clears after 2nd change

 // listener to clear storage if the select is clicked //
  if(clickedFromAnalyzed == null){

    var dropdownMenu = d3.select("#siteSelection").node();
    selectedOption = dropdownMenu.value;
  
    document.getElementById("wellName").innerHTML =  selectedOption //DISPLAY WELL'S NAME
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
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; 
  
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
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };
  
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
  
    var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };
  
    Plotly.newPlot("waterDeclineCurve", dataWater, layoutWater, config);
  
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
  })
  
  document.getElementById("siteSelection").focus();
  
  d3.json("./static/cumProd.json").then((cumData) => {
    var selectedWellCum = 0;
    var selectedWellGasCum = 0;
    cumData.forEach(wellCum=> {
      if(selectedOption ===  wellCum[0]){
        selectedWellCum = wellCum[1];
        selectedWellGasCum = wellCum[3]
      }
    })
    document.getElementById("cumCurve").innerHTML = "Cum: "+ selectedWellCum + " MBBLS, " + selectedWellGasCum + " MMCF";
  })
  
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
  })

  }
  else{
    selectedOption = clickedFromAnalyzed;
  //var dropdownMenu = d3.select("#siteSelection").node(); THIS SHOULD REPLACE  selectedOption = clickedFromAnalyzed; - ROW BEFORE 
  //selectedOption = dropdownMenu.value;
  
  document.getElementById("wellName").innerHTML =  selectedOption //DISPLAY WELL'S NAME
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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true }; 

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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };

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

  var config = { modeBarButtonsToRemove: ['sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian', 'lasso2d', 'select2d', 'zoom2d', 'zoomIn2d', 'zoomOut2d', 'toggleSpikelines'], displaylogo: false, responsive: true };

  Plotly.newPlot("waterDeclineCurve", dataWater, layoutWater, config);

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
})

document.getElementById("siteSelection").focus();

d3.json("./static/cumProd.json").then((cumData) => {
  var selectedWellCum = 0;
  var selectedWellGasCum = 0;
  cumData.forEach(wellCum=> {
    if(selectedOption ===  wellCum[0]){
      selectedWellCum = wellCum[1];
      selectedWellGasCum = wellCum[3]
    }
  })
  document.getElementById("cumCurve").innerHTML = "Cum: "+ selectedWellCum + " MBBLS, " + selectedWellGasCum + " MMCF";
})

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
})

  }
 
};

function table() {
  dropdownMenu = d3.select("#siteSelection").node();
 clickedFromAnalyzed = sessionStorage.getItem("siteSelection")
 console.log(clickedFromAnalyzed, "hello")
 

 if(clickedFromAnalyzed == null)
  {console.log(clickedFromAnalyzed);
      selectedOption = dropdownMenu.value;
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
    
  }
  else
  {
var selectedOption = clickedFromAnalyzed;

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
}

  
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

// LOG LISTENERS FROM ANALYZE
//d3.select("#logarithmic").on('load', function() {Curve(d=0,t='log');});
$( "#logarithmic" ).on( "load", function() {ClickedFromAnalyze(d=0,t='log');}  );

//TABLE LISTENERS //
d3.select("#table").on('click', function() {table()});

// $(document).ready(function() {
//   $("#siteSelection").click(sessionStorage.removeItem("siteSelection")); //SHOW WELL IS NOT PUMPING BUTTON
// });
