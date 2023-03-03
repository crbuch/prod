import * as dh from './data'
import { } from './index'
import { } from './region'

const formatData = (data) => {
    const yesterdayDate = data[0][1];
    const filteredData = data.filter(row => row[1] === yesterdayDate);
    const tableData = filteredData.map(([well, , oil, gas, water, tp, , comms]) =>
        [well, oil, gas, water, tp, comms]
    );

    return tableData;
};

//main
const dropdownId = '#wellFilter'
let region = sessionStorage.getItem('region');
let data = dh.dataET;
if (region !== 'et') data = dh.dataST;

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
    dh.dropdown(dropdownId);
}();

