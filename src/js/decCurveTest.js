// Read Csv for one well

async function declineCurve(message){
    const well_params = await d3.csv("../data/declineCurves/1params.csv").then((data) => {
        return data
    });

    const curr = await d3.csv(`../data/declineCurves/${message}.csv`);
    console.log(message)

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
            color: 'null'},
    };
    var trace2 = {
        x: t_model,
        y: q_model,
        mode: 'lines',
        type: 'scatter',
        color: 'green',
        name: 'Decl Curve',
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
            tickvals: 'auto',
            autorange: true, // adjust the y-axis range if needed
            gridcolor: 'darkgray',
        },
      };

    Plotly.newPlot('declineCurve', [trace1, trace2], layout);
}

declineCurve("Carolpick1")

// read arrays and create graph
