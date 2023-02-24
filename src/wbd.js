import { } from "./index";
import { } from "./region";
import { createFaultLayout, layoutWbd } from './layout';
import { async } from "@firebase/util";
import { reauthenticateWithPhoneNumber } from "firebase/auth";

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

  selectedOption = selectedOption.replace(" ", "");
  selectedOption = selectedOption.replace("#", "");
  selectedOption = selectedOption.replace(" ", "");
  console.log("selectedOption :>> ", selectedOption);

  const files = await getFiles(wellName)

  async function getData(file) {
    const data = await d3.csv(`../data/datawbd/${file}`);
    const [DataTVD, DataN, DataE] = data.reduce(([TVD, N, E], { TVD: tvd, Easting, Northing }) =>
      [[...TVD, parseInt(tvd)],
      [...N, parseInt(Northing)],
      [...E, parseInt(Easting)]
      ], [[], [], []]);

    changesign(DataTVD);
    return [DataTVD, DataN, DataE];
  };
  console.log('files :>> ', files);
  const dataPromises = files.map(file => getData(file));
  const data = await Promise.all(dataPromises);
  console.log('data :>> ', data);//variable length 2d array , inside array[0] = tvd  [1] = Northing [2] = easting

  let dataTvd = [];
  let dataNorthing = [];
  let dataEasting = [];
  let shows = [];

  data.forEach(bore => {
    dataTvd.push(bore[0])
    dataNorthing.push(bore[1])
    dataEasting.push(bore[2])
  });

  for (let i = 0; i < files.length; i++) {
    if (files[i].toLowerCase().includes('show') === true) {
      shows.push(data[i])
      data.splice(i, 1)
    }
  };
  shows = shows[0]

  const [minE, maxE] = d3.extent(dataEasting.flat());
  const [minN, maxN] = d3.extent(dataNorthing.flat());
  const minTVD = d3.min(dataTvd.flat());

  const min = Math.min(minE, minN);
  const max = Math.max(maxE, maxN);

  const scale = 1000;
  const layout = layoutWbd(scale, max, min, minTVD, wellName);
  const colors = ['#1d6acf', '#eb7a10', '#d61515', 'red', '#345223'];

  const plotData = [];

  for (let i = 0; i < data.length; i++) {
    plotData.push({
      opacity: 0.8,
      mode: "lines",
      name: i === 0 ? "Orginal Hole" : `Side Track ${i}`,
      line: {
        width: 6,
        color: colors[i],
      },
      type: "scatter3d",
      x: data[i][2],
      y: data[i][1],
      z: data[i][0],
    });
  };

  if (shows != undefined) {
    const faults = [];

    for (let i = 0; i < shows[0].length; i++) {
      const point = [];

      for (let j = 0; j < shows.length; j++) {
        point.push(shows[j][i]);
      }
      const fault = drawFault(point)
      faults.push(fault)
    };

    faults.forEach(fault => {
      console.log('fault :>> ', fault);
      let layout = createFaultLayout(fault[2], fault[1], fault[0]);
      plotData.push(layout);
    });
  };

  Plotly.newPlot("graph", plotData, layout, { responsive: true });
};

const drawFault = (showPoint) => {
  //tvd , y, x
  const tvdDist = 50;
  let xdist = 500;
  const anglexy = 30;
  const angleyz = 45;
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
    [xpoint1, xpoint2]
  ];
};

const drawPlane = (fault) => {
  
};

async function getFiles(well) {
  console.log('well :>> ', well);
  const wells = await d3.json("../data/datawbd/wells.json").then((data) => {
    return data
  });
  return wells[well]
};

async function dropdown() {
  const wellsdict = await d3.json("../data/datawbd/wells.json").then((data) => {
    return data
  });
  let menu = d3.select("#wellselect");
  let wells = Object.keys(wellsdict)

  wells.forEach(well => {
    menu.append("option")
      .text(well)
      .property("Value", well);
  });
};


dropdown();

d3.select("#wellselect").on("change", function () {
  plot();
});

//init page on load//
$(window).on("load", function () {
  plot();
});