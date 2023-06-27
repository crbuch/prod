// Read Csv for one well

async function declineCurve(well){
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
        title: 'Decline Curve Model', // set the title of the graph
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
    var D = well_params[1][well];
    var b = well_params[2][well];
    var extr_mo = parseInt(well_params[3][well]);
    var q_sum = parseInt(well_params[4][well]);
    var qm_sum = parseInt(well_params[5][well]);
    var future_prod = parseInt(well_params[6][well]);
    var eco_limit_mo = parseInt(well_params[7][well]);
    // var Np = well_params[8][well];

    var currentProd = document.getElementById("q_sum");
    var futureProd = document.getElementById("future_prod");
    var ecoLimit = document.getElementById("eco_limit_mo");

    currentProd.textContent = "Total Oil Produced (current): " + q_sum + " BBLS";
    futureProd.textContent = "Total Extrapolated Production for Next " + extr_mo + " Months: " + future_prod + " BBLS";
    ecoLimit.textContent = "Economic Limit: " + eco_limit_mo + " Months";

    var variab = document.getElementById("variables");
    document.getElementById('variables').style.display = 'inline-block';

    variab.textContent = "D: " + D + " b: " + b;
}

declineCurve("carolpick1".toLowerCase())