import { onAuthStateChangedFb } from './auth';
import { monitorRegion } from './region'
import { dataCuml,dataCumlET,payout,activeWells,sortData,buildTable,dropdown,filterData } from './data';
import { select } from 'd3';
import { moDataST, dataST } from './data';
import { makeLayout, makeTrace } from './layout';

onAuthStateChangedFb();
monitorRegion();

let region = sessionStorage.getItem('region');
const dropdownId = '#siteFilter';

const formatData = () => {
  let tableData = dataCumlET;
  let payData;

  if (region != "et") {
    tableData = dataCuml
    payData = payout

    payData.forEach((pay) => {
      tableData.forEach((well) => {
        if (well[0] == pay["Well Name"]) {
          let rounded = Math.round(pay["% Payout"]*100)
          well.push(rounded);
        }
      });
    });
  };
  
  //switch places of prodData[3] and prodData[4]
  tableData.forEach((well) => {
    let temp = well[4];
    well[4] = well[5];
    well[5] = temp;
  });
  // tableData.forEach((well) => {
  //   well[4] = Math.round(well[4]*100);
  // });

  //remove archived wells
  return tableData.filter(val => activeWells().has(val[0]));
};

const displayPlot = (selected) => {
  // Read Files, select wells with selected name
  let dataMonthly = moDataST.filter(el => el[0] == selected);
  let dataDaily = dataST.filter(el => el[0] == selected);
  // Create arrays of desired columns
  const oilMo = dataMonthly.map(el => el[1]);
  const dateMo = dataMonthly.map(el => el[6]);
  const dateDa = dataDaily.map(el => el[1]).reverse();
  const cumlMoOil = oilMo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);
  const oilDaily = dataDaily.map(el => el[2]).reverse();
  const cumlDaOil = oilDaily.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);
  const formattedDateMo = dateMo.map(dateString => {
    const date = new Date(dateString);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Create traces for graphs
  const traceCumOil = makeTrace(
    dateMo,
    cumlMoOil,
    "Cuml Data",
    "lines",
    "green"
  );
  const traceDailyProdVSCum = makeTrace(
    cumlDaOil,
    oilDaily,
    "hi",
    "line",
    "green",
    dateDa
  );
  const traceMoProdVSCum = makeTrace(
    cumlMoOil,
    oilMo,
    "hello",
    "line",
    "green",
    formattedDateMo
  );

  // Create Different Keys
  const plotContainers = ['cumlOilCurve', 'dailyProdVsCumCurve', 'moProdVsCumCurve'];
  // Traces to Use
  let traceArrays = [
    [traceCumOil],
    [traceDailyProdVSCum],
    [traceMoProdVSCum]
  ];

  // Loop and make the plots, contain keys found in plotContainers^^
  plotContainers.forEach((container, i) => {
    // SETS SCALE TO LOG FOR THE Y-AXIS IF (i == [index in plotContainers])
    let scale = [1, 2].includes(i) ? "log" : null;
    let tickvals = scale == 'log' ? [1,10,100,1000,10000,100000] : 'auto'
    // CREATES LAYOUT, INCLUDES TITLE, SCALE, AND TICK VALUES
    var layout = {
      title: ['Cumulative Oil vs Time', 'Cumulative Oil vs Daily Oil Production', 'Cumulative Oil vs Monthly Oil Production'][i],
      xaxis: {
        autorange: true,
        showline: scale == 'log' ? true : false,
        gridcolor: 'darkgray',
      },
      yaxis: {
        autorange: true,
        type: scale,
        // tickvals: tickvals,
        gridcolor: 'darkgray',
      },
    }
      
    Plotly.newPlot(container, traceArrays[i], layout);
  });
}

displayPlot("Aaron #1");
//main
const tableData = formatData();

//sort by pay: pos=4 by prod: pos=1
document.getElementById('Payfilter').onclick = function(){
  sortData(tableData,4)
};

document.getElementById('Prodfilter').onclick = function(){
  sortData(tableData,1)
};

select(dropdownId).on("change", () => {
  buildTable(filterData(tableData,dropdownId));
  displayPlot(select(dropdownId).node().value);
});


document.getElementById('clearFilter').onclick = function () {
  buildTable(tableData);
};

window.onload = function () {
  buildTable(tableData);
  dropdown(dropdownId);  
}();