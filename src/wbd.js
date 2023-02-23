import {} from "./index";
import {} from "./region";
import { dropdown, dataST } from "./data";
import {createFaultLayout} from './layout';

dropdown(dataST, "#wellselect");

const changesign = (x) => {
  //switches signs in array
  x.forEach((el, i) => {
    x[i] *= -1;
  });
};

async function plot() {
  const dropdownMenu = d3.select("#wellselect").node();
  let wellName = dropdownMenu.value; //Title of the well
  let selectedOption = dropdownMenu.value; //gives wellname chosen
  if (selectedOption == "default") {
    selectedOption = "Aaron #1";
    wellName = "Aaron #1";
  }
  selectedOption = selectedOption.replace(" ", "");
  selectedOption = selectedOption.replace("#", "");
  selectedOption = selectedOption.replace(" ", "");
  console.log("selectedOption :>> ", selectedOption);
  async function getData(j) {
    let bore = new d3.csv(
      "../data/datawbd/" + selectedOption + j + ".csv"
    ).then((data) => {
      //reads csv file
      let DataTVD = [];
      let DataN = [];
      let DataE = [];
      data.forEach(function (d) {
        d.TVD = parseInt(d.TVD);
        d.Easting = parseInt(d.Easting);
        d.Northing = parseInt(d.Northing);
      });
      for (let i = 0; i < data.length; i++) {
        //seperate data into arrays
        DataTVD.push(data[i].TVD);
        DataE.push(data[i].Easting);
        DataN.push(data[i].Northing);
      }

      changesign(DataTVD);
      return [DataTVD, DataN, DataE];
    });
    let promise = await bore;
    return promise;
  }
  async function getShowData(j) {
    let show = new d3.csv(
      "../data/datawbd/" + selectedOption + "show" + j + ".csv"
    ).then((showData) => {
      let showDataTVD = [];
      let showDataN = [];
      let showDataE = [];
      for (let i = 0; i < showData.length; i++) {
        //seperate data into arrays
        showDataTVD.push(showData[i].TVD);
        showDataE.push(showData[i].Easting);
        showDataN.push(showData[i].Northing);
      }
      changesign(showDataTVD);
      return [showDataTVD, showDataN, showDataE];
    });
    let prom = await show;
    return prom;
  }
  let data1 = await getData(1); //waits for data from each wellbore(diff csv files)
  let data2 = await getData(2);
  let data3 = await getData(3);
  let data4 = await getData(4);
  let data5 = await getData(5);

  let allDataE = [data1[2], data2[2], data3[2], data4[2], data5[2]];
  let allDataN = [data1[1], data2[1], data3[1], data4[1], data5[1]];
  let allDataTVD = [data1[0], data2[0], data3[0], data4[0], data5[0]];

  let visibility3,
    visibility4,
    visibility5 = true;
  if (data3[1][0] == null) {
    visibility3 = false;
  }
  if (data4[1][0] == null) {
    visibility4 = false;
  }
  if (data5[1][0] == null) {
    visibility5 = false;
  }
  let maxE = d3.max(allDataE, (d) => {
    return d3.max(d);
  });
  let maxN = d3.max(allDataN, (d) => {
    return d3.max(d);
  });
  let minE = d3.min(allDataE, (d) => {
    return d3.min(d);
  });
  let minN = d3.min(allDataN, (d) => {
    return d3.min(d);
  });
  let minTVD = d3.min(allDataTVD, (d) => {
    return d3.min(d);
  });

  const scale = 1000;

  let layout = {
    width: 1620,
    height: 780,

    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },

    title: {
      text: "Drilling for " + wellName + ", Dimmit County, TX",
      y: 0.98,
    },

    legend: {
      x: 0.8,
      y: 0.8,
    },
    scene: {
      aspectmode: "cube",
      xaxis: {
        title: "Easting",
        nticks: 8,
        range: [minE - scale, maxE + scale],
        gridcolor: "#8a8a8a",
        tickcolor: "#050505",
        backgroundcolor: "#ededed",
        showbackground: true,
      },
      yaxis: {
        title: "Northing",
        nticks: 8,
        range: [minN - scale, maxN + scale],
        gridcolor: "#8a8a8a",
        tickcolor: "#050505",
        backgroundcolor: "#f0f1f2",
        showbackground: true,
      },
      zaxis: {
        title: "TVD",
        nticks: 5,
        range: [minTVD - scale * 0.5, -3000],
        gridcolor: "#8a8a8a",
        tickcolor: "#050505",
        backgroundcolor: "#ededed",
        showbackground: true,
      },
    },
  };
  let alldata = [
    {
      opacity: 0.8,
      mode: "lines",
      name: "Orginal Hole",
      line: {
        width: 6,
        color: "#1d6acf",
      },
      type: "scatter3d",

      x: data1[2],
      y: data1[1],
      z: data1[0],
    },
    {
      opacity: 0.8,
      mode: "lines",
      name: "Side Track 1",
      line: {
        width: 6,
        color: "#eb7a10",
      },
      type: "scatter3d",

      x: data2[2],
      y: data2[1],
      z: data2[0],
    },
    {
      opacity: 0.8,
      mode: "lines",
      name: "Side Track 2",
      line: {
        width: 6,
        color: "#d61515",
      },
      type: "scatter3d",
      visible: visibility3,
      x: data3[2],
      y: data3[1],
      z: data3[0],
    },
    {
      opacity: 0.8,
      mode: "lines",
      name: "Side Track 3",
      line: {
        width: 6,
        color: "#000000",
      },
      type: "scatter3d",
      color: "red",
      visible: visibility4,
      x: data4[2],
      y: data4[1],
      z: data4[0],
    },
    {
      opacity: 0.8,
      mode: "lines",
      name: "Side Track 4",
      line: {
        width: 6,
        color: "#345223",
      },
      type: "scatter3d",
      visible: visibility5,
      x: data5[2],
      y: data5[1],
      z: data5[0],
    },
  ];

  try {
    let showData1 = await getShowData(1);
    //console.log("showData1 :>> ", showData1);
    //let showData2 = await getShowData(2);
    let allBoreData = [data1, data2, data3, data4, data5];
    //let showData1 = [[-6045, -6022, -6514, -6446],['707', '-821', '-1032', '108'],['41', '1361', '1096', '-153']]
    let allShowData = [showData1];
    graphShow(allBoreData, allShowData, layout);
  } catch (err) {
    console.log(err);
    graph();
  }

  async function graph() {
    let graphDiv = document.getElementById("graph");
    Plotly.newPlot("graph", alldata, layout);
  }
  async function graphShow(allBoreData, allShowData) {
    let faultLine1 = drawPlane([-6022, -821, 1361]);
    let faultLine2 = drawPlane([-6045, 707, 41]);
    let faultLine3 = drawPlane([-6514, -1032, 1096]);
    let faultLine4 = drawPlane([-6446, 108, -153]);
    let faults = [faultLine1,faultLine2,faultLine3,faultLine4];

    allBoreData = [
      {
        opacity: 0.8,
        mode: "lines",
        line: {
          width: 6,
          color: "#A52A2A",
        },
        type: "scatter3d",

        x: allBoreData[0][2],
        y: allBoreData[0][1],
        z: allBoreData[0][0],
      },
      {
        opacity: 0.8,
        mode: "lines",
        line: {
          width: 6,
          color: "#DC143C",
        },
        type: "scatter3d",

        x: allBoreData[1][2],
        y: allBoreData[1][1],
        z: allBoreData[1][0],
      },
      {
        opacity: 0.8,
        mode: "lines",
        line: {
          size: 2,
          color: "#D2691E",
        },
        type: "scatter3d",

        x: allBoreData[2][2],
        y: allBoreData[2][1],
        z: allBoreData[2][0],
      },
      {
        opacity: 0.8,
        mode: "lines+markers",
        marker: {
          size: 2,
          color: "#FF7F50",
        },
        type: "scatter3d",

        x: allBoreData[3][2],
        y: allBoreData[3][1],
        z: allBoreData[3][0],
      },
      {
        opacity: 0.8,
        mode: "lines",
        marker: {
          size: 2,
          color: "#E9967A",
        },
        type: "scatter3d",

        x: allBoreData[4][2],
        y: allBoreData[4][1],
        z: allBoreData[4][0],
      },
      {
        opacity: 0.8,
        mode: "markers",
        marker: {
          size: 4,
          color: "#008000",
        },
        type: "scatter3d",

        x: allShowData[0][2],
        y: allShowData[0][1],
        z: allShowData[0][0],
      },
    ];
    let showData = {
      opacity: 0.8,
      mode: "markers",
      marker: {
        size: 4,
        color: "#008000",
      },
      type: "scatter3d",

      x: allShowData[0][2],
      y: allShowData[0][1],
      z: allShowData[0][0],
    };
    faults.forEach(fault => {
      let layout = createFaultLayout(fault[2],fault[1],fault[0]);
      allBoreData.push(layout);
    })
    console.log('allBoreData :>> ', allBoreData);
    Plotly.newPlot("graph", allBoreData, layout);
  }
}

const drawPlane = (showPoint) => {
  //tvd , y, x
  const tvdDist = 50;
  let xdist = 500;
  const anglexy = 30;
  let ydist = xdist / Math.tan((anglexy * Math.PI) / 180);

  if (showPoint[1] < 0) ydist *= -1;
  if (showPoint[1] < 0) xdist *= -1;
 
  const xpoint1 = showPoint[2] + xdist;
  const ypoint1 = showPoint[1] + ydist;

  const xpoint2 = showPoint[2] - xdist;
  const ypoint2 = showPoint[1] - ydist;
  //const tvdpoint = showPoint[0] + tvdDist
  return [
    [showPoint[0], showPoint[0]],
    [ypoint1, ypoint2],
    [xpoint1,xpoint2]
  ];
};

//d3.select("#wellselect").on('change', function() {files()});
d3.select("#wellselect").on("change", function () {
  plot();
});

//init page on load//
$(window).on("load", function () {
  plot();
});
