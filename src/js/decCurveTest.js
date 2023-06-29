// Read Csv for one well

async function declineCurve(){
    const dropdownMenu = d3.select("#wellselect").node();

    well = dropdownMenu.value.replace(/[#\s]/g, "").toLowerCase();
    if (well == 'default') well = 'aaron1';

    const well_params = await d3.csv("../data/declineCurves/1params.csv").then((data) => {
        return data
    });

    const curr = await d3.csv(`../data/declineCurves/${well}.csv`);
    console.log(well)

    // Populate the arrays from curr
    var t = [];
    var q = [];
    var t_model = [];
    var q_model = [];
    var dates = [];
    curr.forEach(function(element) {
        if (element.hasOwnProperty('t')){
            t.push(element.t);
        }
        if (element.hasOwnProperty('q')){
            q.push(element.q);
        }
        if (element.hasOwnProperty('t_model')){
            t_model.push(element.t_model);
        }
        if (element.hasOwnProperty('q_model')){
            q_model.push(element.q_model);
        }
      });

    document.getElementById('declineCurve').style.display = 'block';

    var trace1 = {
        x: t,
        y: q,
        mode: 'lines',
        type: 'scatter',
        name: 'Oil Produced',
        line: {
            color: 'green'},
    };
    var trace2 = {
        x: t_model,
        y: q_model,
        mode: 'lines',
        type: 'scatter',
        color: 'green',
        name: 'Decl Curve',
        line: {
            color: 'purple'},
    };
    // autorange: true,
    var layout = {
        title: 'Decline Curve Model - ' + well, // set the title of the graph
        height: 800,
        legend: {
            yanchor: 'top',
            y: .99,
            xanchor: 'right',
            x: .99,
        },
        xaxis: {
            title: 'Time',
            autorange: true, // adjust the x-axis range if needed
            gridcolor: 'darkgray',
            tickmode: 'linear',  // Set the tick mode to 'auto'
            dtick: 'M12',  // Set the tick interval to 12 months (representing 1 year)
        },
        yaxis: {
            title: 'BOPM (log)',
            type: 'log',
            autorange: true, // adjust the y-axis range if needed
            gridcolor: 'darkgray',
        },
    };

    Plotly.newPlot('declineCurve', [trace1, trace2], layout);

    console.log(well_params)
    var qi = parseInt(well_params[0][well]);
    var D = Number(well_params[1][well]).toFixed(2);
    var b = Number(well_params[2][well]).toFixed(2);
    var extr_mo = parseInt(well_params[3][well]);
    var q_sum = parseInt(well_params[4][well]);
    var qm_sum = parseInt(well_params[5][well]);
    var future_prod = parseInt(well_params[6][well]);
    var eco_limit_mo = parseInt(well_params[7][well]);
    // var Np = well_params[8][well];

    var currentProd = document.getElementById("q_sum");
    currentProd.textContent = "Current Total Oil Produced -- " + q_sum + " BBLS";

    var futureProd = document.getElementById("future_prod");
    futureProd.textContent = "Next " + extr_mo + " Months Expected Production -- " + future_prod + " BBLS";

    var ecoLimit = document.getElementById("eco_limit_mo");
    ecoLimit.textContent = "Economic Limit -- " + eco_limit_mo + " Months";

    var Dvar = document.getElementById("D_var");
    Dvar.textContent = "D -- " + D;
    
    var bvar = document.getElementById("b_var");
    bvar.textContent = "b -- " + b;
}


// declineCurve("dyess1".toLowerCase())

// async function plot() {
//     const dropdownMenu = select("#wellselect").node();
//     let wellName = dropdownMenu.value;
//     if (wellName == 'default') wellName = 'Aaron #1';
  
//     let selectedOption = wellName.replace(/[#\s]/g, "");
//     console.log('selectedOption :>> ', selectedOption);
  
//     async function getData(file) 
//       console.log('file :>> ', file);
//       const data = await csv(`../data/datawbd/${file}`);
//   };

async function dropdown() {
    const wellsdict = await d3.json("../data/everyWell.json").then((data) => {
      return data
    });
    let menu = d3.select("#wellselect");

    wellsdict.forEach(well => {
      menu.append("option")
        .text(well)
        .property("Value", well);
    });
  };
dropdown();

d3.select("#wellselect").on("change", function () {
    console.log("change");
    declineCurve();
});

// init page on load//
window.onload = function () {
    declineCurve();
}();
