// Cumulative production
let region = document.getElementById("region").textContent;
async function tableOnLoad() {
  let tableData = await d3.json("./static/cumProd"+region+".json");
  if (region != "ET"){
    let payData = await d3.json("./static/payouts.json");
    
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
  

  

  //global declaration of tbody, since it will be accessed in and out of functions
  tbody = d3.select("tbody");

  function createDropdownOptions() {
    var partnerSelector = d3.select("#siteFilter"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
    d3.json("./static/allProductionData"+region+".json").then((allData) => {
      //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
      repeatedWells = []; //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
      allData.forEach((row) => {
        //LOOP THROUGH NET_INTEREST FILE
        repeatedWells.push(row[0]); //PUSH ALL PARTNER'S NAME TO LIST
      });
      wells = [...new Set(repeatedWells)].sort();
      wells.forEach((well) => {
        partnerSelector.append("option").text(well).property("Value", well);
      });
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
  createDropdownOptions();
  buildTable(tableData);
  //create listener for when user wants to filter data
  d3.selectAll("#siteFilter").on("change", handleClick);
}

async function sortByProd() {
  event.preventDefault();
  let allData = await d3.json("./static/cumProd"+region+".json");
  let payData = await d3.json("./static/payouts.json");

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
  let prodData = await d3.json("./static/cumProd"+region+".json");
  let payData = await d3.json("./static/payouts.json");
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
