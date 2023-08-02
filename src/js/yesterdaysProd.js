import * as dh from './dataHandlers'
import { onAuthStateChangedFb } from './auth';
import { monitorRegion } from './region'
import { select } from 'd3';
import { lazyLoad } from './load/loader';

const formatData = (data) => {
    const yesterdayDate = data[0][1];
    const filteredData = data.filter(row => row[1] === yesterdayDate);
    const tableData = filteredData.map(([well, , oil, gas, water, tp, , comms]) =>
        [well, oil, gas, water, tp, comms]
    );

    return tableData;
};

let pageData;
const dropdownId = '#wellFilter'
onAuthStateChangedFb();
$(document).ready(function () {
  $("#header").load("../src/pages/header.html", () => {
    console.log('loaded header');
    monitorRegion();
  });
});

document.getElementById('Prodfilter').onclick = function () {
    dh.sortData(pageData, 1);
};

document.getElementById('clearFilter').onclick = function () {
    dh.buildTable(pageData);
};

select(dropdownId).on("change", () => {
    dh.buildTable(dh.filterData(pageData, dropdownId));
});

window.onload = function () {
    lazyLoad().then(data => {
        data.prod = formatData(data.prod)
        pageData = data.prod
        dh.buildTable(data.prod);
        dh.dropdown(dropdownId,data.prod);
    })
}();