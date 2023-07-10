import { onAuthStateChangedFb } from './auth';
import { monitorRegion } from './region'
import { dataCuml,dataCumlET,payout,activeWells,sortData,buildTable,dropdown,filterData,formations } from './data';
import { formatSpecifier, select } from 'd3';
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
    tableData.forEach(well => {
      well.push(formations[well[0]])
    })
  };
  
  //switch places of prodData[3] and prodData[4]
  //tableData.forEach((well) => {
  //  let temp = well[4];
  //  well[4] = well[5];
  //  well[5] = temp;
  //});
  // tableData.forEach((well) => {
  //   well[4] = Math.round(well[4]*100);
  // });
  console.log('tableData :>> ', tableData);
  //remove archived wells
  return tableData.filter(val => activeWells().has(val[0]));
};

const displayPlot = (selected) => {
  // Read Files, select wells with selected name
  let dataMonthly = moDataST.filter(el => el[0] == selected);
  let dataDaily = dataST.filter(el => el[0] == selected);
  // Create arrays of desired columns
  const oilMo = dataMonthly.map(el => el[1]);
  var dateMo = dataMonthly.map(el => el[6]);
  const dateDa = dataDaily.map(el => el[1]).reverse();
  const cumlMoOil = oilMo.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);
  const oilDaily = dataDaily.map(el => el[2]).reverse();
  const cumlDaOil = oilDaily.reduce((acc, val, idx) => (idx === 0 ? acc.concat(val) : acc.concat(val + acc[idx - 1])), []);

  var formattedDateMo = dateMo.map(dateString => {
    const date = new Date(dateString);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });
  formattedDateMo = formattedDateMo.slice(1); // Slice because array starts from one month prior
  dateMo.pop() // Take off most recent month

  // Create traces for graphs
  const traceCumOil = makeTrace(
    dateMo,
    cumlMoOil,
    "Cuml Data",
    "lines",
    "green"
  );
  cumlMoOil.pop() // Take off most recent month
  oilMo.pop() // Take off most recent month
  const traceMoProdVSCum = makeTrace(
    cumlMoOil,
    oilMo,
    "monthly",
    "line",
    "green",
    formattedDateMo
  );
  const traceDailyProdVSCum = makeTrace(
    cumlDaOil,
    oilDaily,
    "daily",
    "line",
    "green",
    dateDa
  );

  // Determine the amount of cycles to show for log graphs
  var maxOilMo = Math.max(...oilMo)
  var maxOilDaily = Math.max(...oilDaily)
  var numDigits_mo = Math.floor(Math.log10(maxOilMo))+1;
  var numDigits_da = Math.floor(Math.log10(maxOilDaily))+1;

  var cycle = [null, numDigits_mo, numDigits_da] // # of cycles to show, null for non-log graph
  let min = selected == 'South Texas Total' ? 2 : 0

  // Create Different Keys
  const plotContainers = ['cumlOilCurve', 'moProdVsCumCurve', 'dailyProdVsCumCurve'];
  // Traces to Use
  let traceArrays = [
    [traceCumOil],
    [traceMoProdVSCum],
    [traceDailyProdVSCum]
  ];

  // Loop and make the plots, contain keys found in plotContainers^^
  plotContainers.forEach((container, i) => {
    // SETS SCALE TO LOG FOR THE Y-AXIS IF (i == [index in plotContainers])
    let scale = [1, 2].includes(i) ? "log" : null;
    let tickvals = scale == 'log' ? [0,1,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000] : 'auto'
    let ticktext = scale == 'log' ? [0,1,10,'','','','','','','','',100,'','','','','','','','',1000,'','','','','','','','',10000,'','','','','','','','',100000,'','','','','','','','',1000000]: 'auto'
    
    var layout = {
      title: ['Time vs Cumulative Oil',  'Cumulative Oil vs Monthly Oil Production', 'Cumulative Oil vs Daily Oil Production'][i],
      xaxis: {
        autorange: true,
        showline: scale == 'log' ? true : false,
        gridcolor: 'darkgray',
      },
      yaxis: {
        range: [min,cycle[i]],
        // autorange: true,
        type: scale,
        tickvals: tickvals,
        ticktext: ticktext,
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