function dropdown(){//dropdown for wells
    var select = d3.select('#wellselect');
    d3.json('./datawbd/wellnames.json').then((alldata) => {
        wellname = []
        alldata.forEach((i) => {
            wellname.push(i[0])
        });
        wells = [...new Set(wellname)].sort()
        wells.forEach((i) => { 
        select
        .append('option')
        .text(i)
        .property('Value', i)
        });
    }) 
};
dropdown();

let changesign = x => {//switches signs in array
    x.forEach((el,i ) => {
        x[i] *= -1
    });
};

async function Plot(){
    var dropdownMenu = d3.select("#wellselect").node();
    var selectedOption = dropdownMenu.value;//gives wellname chosen
    async function getData(j){
        let bore = new d3.csv('./datawbd/'+selectedOption+j+'.csv').then((data) =>{//reads csv file
            datatvd = [];
            dataN = [];
            dataE = [];
            for (i in data){//seperated data into arrays
                datatvd.push(data[i].TVD)
                dataE.push(data[i].Easting)
                dataN.push(data[i].Northing)
            }
            changesign(datatvd)
            return [datatvd, dataN, dataE]
            
        });
        let promise = await bore
        return promise
    };
    let data1 = await getData(1)//waits for data from each wellbore(diff csv files)
    let data2 = await getData(2)
    let data3 = await getData(3)
    let data4 = await getData(4)
    let data5 = await getData(5)
    let alldata = [
        {
            opacity:.8,
            mode: 'lines+markers',
            marker: {
                size: 2,
                color: '#a8a800'
            },
            type: 'scatter3d',
            color: 'red',
            
            x: data1[2],
            y: data1[1],
            z: data1[0],

        },
        {
            opacity:.8,
            mode: 'lines+markers',
            marker: {
                size: 2,
                color: '#c73333'
            },
            type: 'scatter3d',
            
            x: data2[2],
            y: data2[1],
            z: data2[0],
        },
        {
            opacity:.8,
            mode: 'lines+markers',
            marker: {
                size: 2,
                color: '#ffe552'
            },
            type: 'scatter3d',
            
            x: data3[2],
            y: data3[1],
            z: data3[0],
        },
        {
            opacity:.8,
            mode: 'lines+markers',
            marker: {
                size: 2,
                color: '#005700'
            },
            type: 'scatter3d',
            
            x: data4[2],
            y: data4[1],
            z: data4[0],
        },
        {
            opacity:.8,
            mode: 'lines+markers',
            marker: {
                size: 2,
                color: '#ad00ad'
            },
            type: 'scatter3d',
            
            x: data5[2],
            y: data5[1],
            z: data5[0],
        }
    ];
    let layout = {
        showlegend: false,
        autosize: true,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 60,
            pad: 0
          },
        title:{text: 'Projected Drilling Plan for '+selectedOption+', Dimmit County, TX'},
        scene: {
            xaxis: {title: 'Easting'},
            yaxis: {title: 'Northing'},
            zaxis: {title: 'TVD'}
        },
        aspectratio: {'x':1, 'y':1, 'z':1},
        
         xaxis: {
          nticks: 9,
          range: [d3.min(data1[1]),d3.max(data1[1])],
        },
         yaxis: {
          nticks: 7,
          range: [d3.min(data1[2]), d3.max(data1[2])],
        },
         zaxis: {
         nticks: 10,
         range: [-8000,0],
        },
    };
    Plotly.newPlot('graph',alldata,layout)



};


d3.select("#wellselect").on('change', function() {Plot()});
