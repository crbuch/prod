import { } from './index'
import { dropdown, dataST } from './data';

// Cumulative production
let region = document.getElementById("region").textContent;
async function tableOnLoad() {
  let tableData = await d3.json("../data/cumProd" + region + ".json");
  if (region != "ET") {
    let payData = await d3.json("../data/payouts.json");

    payData.forEach((pay) => {
      tableData.forEach((well) => {
        if (well[0] == pay["Well Name"]) {
          well.push(pay["% Payout"]);
        }
      });
    });
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
  }

  function handleClick() {
    // the value entered in the sitename filter becomes the value for the siteName variable
    let requestedSiteName = d3.select("#siteFilter").property("value");
    // set data be filtered to imported data (the data ready to be filtered)
    let filteredData = tableData;
    if (requestedSiteName) {
      filteredData = filteredData.filter((row) => row[0] == requestedSiteName);
      console.log(filteredData);
    }
    //build table using the filteredData variable
    buildTable(filteredData);
  }
  dropdown(dataST,"#siteFilter");
  buildTable(tableData);
  //create listener for when user wants to filter data
  d3.selectAll("#siteFilter").on("change", handleClick);
}

async function sortByProd() {
  event.preventDefault();
  let allData = await d3.json("../data/cumProd" + region + ".json");
  let payData = await d3.json("../data/payouts.json");

  payData.forEach((pay) => {
    allData.forEach((well) => {
      if (well[0] == pay["Well Name"]) {
        well.push(pay["% Payout"]);
      }
    });
  });
  //switch places of prodData[3] and prodData[4]
  allData.forEach((well) => {
    let temp = well[4];
    well[4] = well[5];
    well[5] = temp;
  });
  allData.forEach((well) => {
    well[4] = 100 * well[4];
    well[4] = Number(well[4]).toFixed(2);
  });

  allData.sort((a, b) => {
    //sorts data high to low by oil production
    const aVal = a[1];
    const bVal = b[1];
    return bVal - aVal;
  });

  buildTable(allData);
}
async function sortByPay() {
  event.preventDefault();
  let prodData = await d3.json("../data/cumProd" + region + ".json");
  let payData = await d3.json("../data/payouts.json");
  //add % payout from payData to prodData
  payData.forEach((pay) => {
    prodData.forEach((well) => {
      if (well[0] == pay["Well Name"]) {
        well.push(pay["% Payout"]);
      }
    });
  });

  //switch places of prodData[3] and prodData[4]
  prodData.forEach((well) => {
    let temp = well[4];
    well[4] = well[5];
    well[5] = temp;
  });
  prodData.forEach((well) => {
    if (well[4] == null) {
      well[4] = 0;
    }
  });
  prodData.forEach((well) => {
    well[4] = 100 * well[4];
    well[4] = Number(well[4]).toFixed(2);
  });

  prodData.sort((a, b) => {
    const aVal = a[4];
    const bVal = b[4];
    return bVal - aVal;
  });
  //prodData.unshift(["Well Name", "Oil (MBO)","Gas (MMCF)","Water (MBW)", "% Payout", "Formation"]);

  buildTable(prodData);
}

function buildTable(allData) {
  const tbody = d3.select("tbody");
  tbody.html("");
  allData.forEach((well) => {
    let row = tbody.append("tr");
    //console.log(well)

    Object.values(well).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

d3.select("#Prodfilter").on("click", function () {
  sortByProd();
});
d3.select("#Payfilter").on("click", function () {
  sortByPay();
});
window.onload = tableOnLoad();
