// Read Csv for one well

async function declineCurve(message){
    const well_params = await d3.csv("../data/declineCurves/1params.csv").then((data) => {
        return data
    });

    const curr = await d3.csv(`../data/declineCurves/${message}.csv`);
    console.log(message)
    console.log(curr);
   
    console.log(curr[0].t)

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
    console.log(t)
    console.log(q)
    console.log(t_model)
    console.log(q_model)
    
    // let traceOil = makeTrace( 
    //     site_date,
    //     site_oil,
    //     "Oil [MBO]",
    //     null,
    //     "green",
    //     comments
    // );

    document.getElementById('declineCurve').style.display = 'block';

    var trace1 = {
        x: t,
        y: q,
        mode: 'lines',
        type: 'scatter',
        color: 'green',
        visible: true
    };
    var trace2 = {
        x: t_model,
        y: q_model,
        mode: 'lines',
        type: 'scatter',
        color: 'green',
        visible: true
    };
    console.log(typeof(trace2))
    // autorange: true,
    var layout = {
        title: 'My Plotly Graph', // set the title of the graph
        xaxis: {
            autorange: true // adjust the x-axis range if needed
        },
        yaxis: {
            type: 'log',
            autorange: true, // adjust the y-axis range if needed
        }
      };

    Plotly.newPlot('declineCurve', [trace1, trace2], layout);

}

declineCurve("Aaron1")

// read arrays and create graph
