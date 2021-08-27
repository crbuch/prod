// FUNCTON TO CREATE WELL OPTIONS DROP DOWN
function createDropdownOptions() {
  var partnerSelector = d3.select("#siteSelection"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
  d3.json("./static/allProductionData.json").then((allData) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
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
d3.select("#siteSelection").on('change', function() {Curve(d=0,t='linear');});


//FUNCTION FOR LINEAR SCALE//
function Curve(d,t){
  dropdownMenu = d3.select("#siteSelection").node();
  selectedOption = dropdownMenu.value;
  
  console.log(selectedOption);
  
  d3.json("./static/allProductionData.json").then((data) =>{ 
    var site_oil = [];
    var site_gas = [];
    var site_water = [];
    var site_date = [];
    var comments = [];
    var movingAverage = [];

    data.forEach((site) => {if(site[0] === selectedOption){
      site_date.push(site[1]);
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
    name: "7D MA",
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
    }
  };
  Plotly.newPlot("oilDeclineCurve", data, layoutOil, {displayModeBar: true}, {responsive: true});
  
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
  Plotly.newPlot("gasDeclineCurve", dataGas, layoutGas);
  
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
  Plotly.newPlot("waterDeclineCurve", dataWater, layoutWater);

  if(d===0 && t==='log'){
    var hide = document.getElementById("timeframes");
    hide.style.display = "none";
    var logShow = document.getElementById("timeframesLog");
    logShow.style.display = "block";
  }
  else if(d===0 && t==='linear'){
    var hide = document.getElementById("timeframesLog");
    hide.style.display = "none";
    var hide = document.getElementById("timeframes");
    hide.style.display = "block";
  }
})
};
//FUNCTION FOR LOGARITHMIC SCALE//

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




