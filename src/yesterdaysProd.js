import * as dh from './data'
import { } from './region'

const formatData = (data) => {
    const yesterdayDate = data[0][1];
    let filteredData = data.filter(row => row[1] == yesterdayDate);
    let tableData = [];

    filteredData.forEach(well => {
        tableData.push(Array(well[0], well[2], well[3], well[4], well[5], well[7]))
    });

    return tableData
};

//main
const dropdownId = '#wellFilter'
let region = sessionStorage.getItem('region');
let data = dh.dataET;
if (region != 'et') data = dh.dataST;

const tableData = formatData(data);


document.getElementById('Prodfilter').onclick = function () {
    dh.sortData(tableData, 1);
};

document.getElementById('clearFilter').onclick = function () {
    dh.buildTable(tableData);
};

d3.select(dropdownId).on("change", () => {
    dh.buildTable(dh.filterData(tableData, dropdownId));
});

window.onload = function () {
    dh.buildTable(tableData);
    dh.dropdown(data, dropdownId);  
}();

