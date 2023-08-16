import { onAuthStateChangedFb } from './auth';
import { monitorRegion } from './region'
import { layoutWbd } from './layout';
import { json, select, csv, extent } from 'd3';

onAuthStateChangedFb();
monitorRegion();

const wbdData = await json("../data/datawbd/wells.json").then((data) => {
  return data
});

const faultData = await json("../data/datawbd/shows.json").then((data) => {
  return data
});

async function plot() {
  const dropdownMenu = select("#wellselect").node();
  let wellName = dropdownMenu.value;
  if (wellName == 'default') wellName = 'Aaron #1';

  let selectedOption = wellName.replace(/[#\s]/g, "");
  console.log('selectedOption :>> ', selectedOption);

  async function getData(file) {
    console.log('file :>> ', file);
    const data = await csv(`../data/datawbd/${file}`);
    const [DataTVD, DataN, DataE] = data.reduce(([TVD, N, E], { TVD: tvd, Easting, Northing }) =>
      [[...TVD, parseInt(tvd)],
      [...N, parseInt(Northing)],
      [...E, parseInt(Easting)]
      ], [[], [], []]);
    
    return [DataTVD.map(el => -el), DataN, DataE];
  };

  const files = wbdData[wellName];
  const dataPromises = files.map(file => getData(file));
  const data = await Promise.all(dataPromises);
  console.log('files :>> ', files);
  let dataTvd = [];
  let dataNorthing = [];
  let dataEasting = [];
  console.log('data :>> ', data);
  data.forEach(bore => {
    dataTvd.push(bore[0])
    dataNorthing.push(bore[1])
    dataEasting.push(bore[2])
  });

  const [minE, maxE] = extent(dataEasting.flat());
  const [minN, maxN] = extent(dataNorthing.flat());
  const [minTVD, _] = extent(dataTvd.flat());

  const min = Math.min(minE, minN);
  const max = Math.max(maxE, maxN);

  const layout = layoutWbd(max + 1000, min - 1000, minTVD - 500, minTVD + 2000, wellName);

  const plotData = [];
  const colors = ['#1d6acf', '#eb7a10', '#d61515', '#7B3FA9', '#6AE6EC'];

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

  const faults = faultData[wellName]

  if (faults != undefined) {
    faults.forEach(fault => {
      fault.forEach((line, idx) => {
        plotData.push({
          opacity: idx === 1 || idx === fault.length - 1 ? 1.0 : 0.4,
          mode: "lines",
          line: {
            width: 6,
            color: idx === 1 || idx === fault.length - 1 ? '#36e35c' : '#90f0a5'
          },
          type: "scatter3d",
          showlegend: false,
          x: line[2],
          y: line[1],
          z: line[0],
        })
      });
    });
  };

  Plotly.newPlot("graph", plotData, layout);
};

async function dropdown() {
  const wellsdict = await json("../data/datawbd/wells.json").then((data) => {
    return data
  });
  let menu = select("#wellselect");
  let wells = Object.keys(wellsdict)

  wells.forEach(well => {
    menu.append("option")
      .text(well)
      .property("Value", well);
  });
  document.getElementById('wellselect').focus();
};

dropdown();

select("#wellselect").on("change", function () {
  plot();
});

//init page on load//
window.onload = function () {
  plot();
}();