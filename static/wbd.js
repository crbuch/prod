
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


async function plot(){
    const dropdownMenu = d3.select("#wellselect").node();
    const selectedOption = dropdownMenu.value;//gives wellname chosen
    console.log(selectedOption);
    async function getData(j){
        let bore = new d3.csv('./datawbd/'+selectedOption+j+'.csv').then((data) =>{//reads csv file
            DataTVD = [];
            DataN = [];
            DataE = [];
            data.forEach(function(d){
                d.TVD = parseInt(d.TVD);
                d.Easting = parseInt(d.Easting);
                d.Northing = parseInt(d.Northing);
            });
            for (i in data){//seperate data into arrays
                DataTVD.push(data[i].TVD)
                DataE.push(data[i].Easting)
                DataN.push(data[i].Northing)
            }
            var max = d3.max(data, function(d){return d.Northing})
            console.log(DataN)
            changesign(DataTVD)
            return [DataTVD, DataN, DataE]
            
        });
        let promise = await bore
        return promise
    };
    async function getShowData(j){
        let show = new d3.csv('./datawbd/'+selectedOption+'show'+j+'.csv').then((showData)=>{
            showDataTVD = [];
            showDataN = [];
            showDataE = [];
            for (i in showData){//seperate data into arrays
                showDataTVD.push(showData[i].TVD)
                showDataE.push(showData[i].Easting)
                showDataN.push(showData[i].Northing)
            }
            changesign(showDataTVD)
            return [showDataTVD, showDataN, showDataE]
        });
        let prom = await show
        return prom 
    };
    const data1 = await getData(1)//waits for data from each wellbore(diff csv files)
    const data2 = await getData(2)
    const data3 = await getData(3)
    const data4 = await getData(4)
    const data5 = await getData(5)
    
    let allDataE = [data1[2],data2[2],data3[2],data4[2],data5[2]]
    let allDataN = [data1[1],data2[1],data3[1],data4[1],data5[1]]
    let allDataTVD = [data1[0],data2[0],data3[0],data4[0],data5[0]]
    
    let maxE = d3.max(allDataE, function(d){
        return d3.max(d);
    });
    let maxN = d3.max(allDataN, function(d){
        return d3.max(d);
    });
    let minE = d3.min(allDataE, function(d){
        return d3.min(d);
    });
    let minN = d3.min(allDataN, function(d){
        return d3.min(d);
    });
    let maxTVD = d3.max(allDataTVD, function(d){
        return d3.max(d);
    });
    let minTVD = d3.min(allDataTVD, function(d){
        return d3.min(d);
    });
    //console.log(maxN)
    //console.log(minN)
    const scaleMin = 1000
    const scaleMx = 1000
    let layout = {
        showlegend: false,
        autosize: false,
        width: 1645,
        height: 780,
        
        title:{text: 'Drilling for'+selectedOption+', Dimmit County, TX'},
        scene: {
            aspectmode: 'cube',
        xaxis: {
            title:'Easting',
            nticks: 8,
            range: [minE-scaleMin,maxE+scaleMx],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true
        },
        yaxis: {
            title: 'Northing',
            nticks: 8,
            range: [minN-scaleMin,maxN+scaleMx],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#f0f1f2",
            showbackground: true
        },
        zaxis: {
            title: 'TVD',
            nticks: 5,
            range: [minTVD,-3000],
            gridcolor: "#8a8a8a",
            tickcolor: "#050505",
            backgroundcolor: "#ededed",
            showbackground: true
        },
        },
        
    };
    let alldata = [
        {
            opacity:.8,
            mode: 'lines',
            line: {
                width: 6,
                color: '#000000'
            },
            type: 'scatter3d',
            color: 'red',
            
            x: data1[2],
            y: data1[1],
            z: data1[0],

        },
        {
            opacity:.8,
            mode: 'lines',
            line: {
                width: 6,
                color: '#345223'
            },
            type: 'scatter3d',
            
            x: data2[2],
            y: data2[1],
            z: data2[0],
        },
        {
            opacity:.8,
            mode: 'lines',
            line: {
                width: 6,
                color: '#d61515'
            },
            type: 'scatter3d',
            
            x: data3[2],
            y: data3[1],
            z: data3[0],
        },
        {
            opacity:.8,
            mode: 'lines',
            line: {
                width: 6,
                color: '#eb7a10'
            },
            type: 'scatter3d',
            
            x: data4[2],
            y: data4[1],
            z: data4[0],
        },
        {
            opacity:.8,
            mode: 'lines',
            line: {
                width: 6,
                color: '#1d6acf'
            },
            type: 'scatter3d',
            
            x: data5[2],
            y: data5[1],
            z: data5[0],
        }
    ];
    //console.log(typeof alldata)
    try{
        let showData1 = await getShowData(1);
        let showData2 = await getShowData(2);
        let allBoreData = [data1,data2,data3,data4,data5]
        let allShowData = [showData1,showData2]
        graphShow(allBoreData,allShowData,layout);
    }catch(err){
        console.log(err)
        graph();

    };
    async function graph(){

        Plotly.newPlot('graph',alldata,layout)
    };
    async function graphShow(allBoreData,allShowData){
        showData = [
            {
                opacity:.8,
                mode: 'markers',
                marker: {
                    size: 4,
                    color: '#008000'
                },
                type: 'scatter3d',
                
                x: allShowData[0][2],
                y: allShowData[0][1],
                z: allShowData[0][0],

            },
            {
                opacity:.8,
                mode: 'markers',
                marker: {
                    size: 4,
                    color: '#008000'
                },
                type: 'scatter3d',
                
                x: allShowData[1][2],
                y: allShowData[1][1],
                z: allShowData[1][0],

            }
        ];
      
        allBoreData = [
            {
                opacity:.8,
                mode: 'lines',
                line: {
                    width: 6,
                    color: '#A52A2A'
                },
                type: 'scatter3d',
                
                x: allBoreData[0][2],
                y: allBoreData[0][1],
                z: allBoreData[0][0],

            },
            {
                opacity:.8,
                mode: 'lines',
                line: {
                    width: 6,
                    color: '#DC143C'
                },
                type: 'scatter3d',
                
                x: allBoreData[1][2],
                y: allBoreData[1][1],
                z: allBoreData[1][0],
            },
            {
                opacity:.8,
                mode: 'lines',
                line: {
                    size: 2,
                    color: '#D2691E'
                },
                type: 'scatter3d',
                
                x: allBoreData[2][2],
                y: allBoreData[2][1],
                z: allBoreData[2][0],
            },
            {
                opacity:.8,
                mode: 'lines+markers',
                marker: {
                    size: 2,
                    color: '#FF7F50'

                },
                type: 'scatter3d',
                
                x: allBoreData[3][2],
                y: allBoreData[3][1],
                z: allBoreData[3][0],
            },
            {
                opacity:.8,
                mode: 'lines',
                marker: {
                    size: 2,
                    color: '#E9967A'
                },
                type: 'scatter3d',
                
                x: allBoreData[4][2],
                y: allBoreData[4][1],
                z: allBoreData[4][0],
            },
            {
                opacity:.8,
                mode: 'markers',
                marker: {
                    size: 4,
                    color: '#008000'
                },
                type: 'scatter3d',
                
                x: allShowData[0][2],
                y: allShowData[0][1],
                z: allShowData[0][0],

            },
            {
                opacity:.8,
                mode: 'markers',
                marker: {
                    size: 4,
                    color: '#008000'
                },
                type: 'scatter3d',
                
                x: allShowData[1][2],
                y: allShowData[1][1],
                z: allShowData[1][0],

            }
        ];
        
        Plotly.newPlot('graph',allBoreData,layout,{displayModeBar: false} )
    };
    
};

//d3.select("#wellselect").on('change', function() {files()});
d3.select("#wellselect").on('change', function() {plot()});
