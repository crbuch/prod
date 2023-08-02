import { monitorRegion } from './region'
import { select,json } from 'd3';


function createAnalysis(data) {
  const tbody = select("tbody")

  function buildTable(tableData) {
    tbody.html(""); //clear table
    tableData.forEach((well) => {
      let row = tbody.append("tr");
      // loop through each value to add a cell for each of it
      Object.values(well).forEach((val,idx) => {
        if (idx == 1){val = new Date(val).toISOString().split('T')[0];}
        console.log(typeof(val), val,idx);
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }; // closing forEach

  //JQUERY TO ADD LINKS 
  $(document).ready(function () {
    $("tr td:nth-child(1)").each(function () { //ADD LINK TO THE FIRST CHILD OF EVERY TD, SO THE NAME OF THE WELL
      //$(this).html('<a href="https://cmlexploration.github.io/STprod/curves.html">' + $(this).text() + '</a>');
      $(this).html('<a href="./curves.html">' + $(this).text() + '</a>');
      $(this).click(function () {
        sessionStorage.setItem('siteSelection', $(this).text())
      })
    });
  });
  buildTable(data)
};

$(document).ready(function () {
  $("#header").load("../src/pages/header.html", () => {
    console.log('loaded header');
    monitorRegion();
  });
});

let region = sessionStorage.region;
let data = null;
if (region == 'ST') data = await json("../data/ST/analyzeST.json").then((data) => {
  return data
});

createAnalysis(data);