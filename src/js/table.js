import { monitorAuthState } from './index'
import { } from './region'
import * as dh from './data'

monitorAuthState()

let region = sessionStorage.getItem('region');
const dropdownId = '#siteFilter';


const formatData = () => {
  let tableData = dh.dataCumlET;
  let payData;

  if (region != "et") {
    tableData = dh.dataCuml
    payData = dh.payout

    payData.forEach((pay) => {
      tableData.forEach((well) => {
        if (well[0] == pay["Well Name"]) {
          well.push(pay["% Payout"]);
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
  tableData.forEach((well) => {
    well[4] = 100 * well[4];
    well[4] = Number(well[4]).toFixed(2);
  });

  //remove archived wells
  return tableData.filter(val => dh.activeWells().has(val[0]));
};


//main
const tableData = formatData();

//sort by pay: pos=4 by prod: pos=1
document.getElementById('Payfilter').onclick = function(){
  dh.sortData(tableData,4)
};

document.getElementById('Prodfilter').onclick = function(){
  dh.sortData(tableData,1)
};

d3.select(dropdownId).on("change", () => {
  dh.buildTable(dh.filterData(tableData,dropdownId));
});

document.getElementById('clearFilter').onclick = function () {
  dh.buildTable(tableData);
};

window.onload = function () {
  dh.buildTable(tableData);
  dh.dropdown(dropdownId);  
}();