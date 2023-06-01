import { monitorAuthState } from './index'
import { monitorRegion } from './region'
import { dataCuml,dataCumlET,payout,activeWells,sortData,buildTable,dropdown,filterData } from './data';
import { select } from 'd3';

monitorAuthState();
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
  return tableData.filter(val => activeWells().has(val[0]));
};


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
});


document.getElementById('clearFilter').onclick = function () {
  buildTable(tableData);
};

window.onload = function () {
  buildTable(tableData);
  dropdown(dropdownId);  
}();