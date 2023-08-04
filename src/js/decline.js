// Read Csv for one well

async function declineCurve(){
    const dropdownMenu = d3.select("#wellselect").node();

    well = dropdownMenu.value.replace(/[#\s]/g, "").toLowerCase();
    if (well == 'default') well = 'aaron1';

    // READ FILES
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

    const indicesArray = Array.from(Array(t.length).keys()).map(String); // Array of indexes
    //Trace Data
    var trace1 = {
        x: t,
        y: q,
        mode: 'lines',
        type: 'scatter',
        name: 'Oil Produced',
        line: {
            color: 'green'},
        text: indicesArray
    };

    // Trace Model
    var model_eco_limit = parseInt(well_params[9][well]);
    if(!isNaN(model_eco_limit)){
        t_model = t_model.slice(0, model_eco_limit + 1);
    }
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

    // Model Read Point
    var end_index = parseInt(well_params[8][well]);
    var trace3 = {
        x: [t_model[end_index]],
        y: [q_model[end_index]],
        mode: 'lines+markers',
        type: 'scatter',
        color: 'red',
        name: 'Model Read End',
        line: {
            color: 'red'},
        
    };

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
            // autorange: true,
            tickvals: [0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,20000,30000,40000,50000],
            ticktext: [0,1,'','','','','50','','','','',100,'','','','500','','','','',1000,'','','','5000','','','','',10000,20000,30000,40000,50000],
            gridcolor: 'darkgray',
        },
    };
    Plotly.newPlot('declineCurve', [trace1, trace2, trace3], layout);

    // READS WELL PARAMS
    var qi = parseInt(well_params[0][well]);
    var D = Number(well_params[1][well]).toFixed(2);
    var b = Number(well_params[2][well]).toFixed(2);
    var extr_mo = parseInt(well_params[3][well]);
    var q_sum = parseInt(well_params[4][well]).toLocaleString();
    var qm_sum = parseInt(well_params[5][well]);
    var future_prod = parseInt(well_params[6][well]).toLocaleString();
    var eco_limit = Number(well_params[7][well]).toFixed(2);
    var np_value = parseInt(well_params[10][well]).toLocaleString();
    
    var currentProd = document.getElementById("q_sum");
    currentProd.textContent = "Current Total Oil Produced -- " + q_sum + " BBLS";
    var futureProd = document.getElementById("future_prod");
    futureProd.textContent = "Next " + extr_mo + " Months Expected Production -- " + future_prod + " BBLS";
    var ecoLimit = document.getElementById("eco_limit");
    ecoLimit.textContent = "Economic Limit = " + eco_limit + " Years";
    var Dvar = document.getElementById("D_var");
    Dvar.textContent = "D -- " + D;
    var bvar = document.getElementById("b_var");
    bvar.textContent = "b -- " + b;
    var npv = document.getElementById("np_value");
    npv.textContent = "NP -- " + np_value + " BBLS";
}

async function dropdown() {
    const wellsdict = await d3.json("../data/misc/everyWell.json").then((data) => {
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
