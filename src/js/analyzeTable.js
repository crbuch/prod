import { monitorAuthState } from './index'
import { monitorRegion } from './region'
import { analyzeData,analyzeDataET } from './data';
import { select } from 'd3';

monitorAuthState();
monitorRegion();

let data = analyzeData;
let region = sessionStorage.getItem("region");
if (region == "et") data = analyzeDataET;

const createAnalysis = (data) => {
  const tbody = select("tbody")
  //hi
  function buildTable(tableData) {
    tbody.html(""); //clear table
    tableData.forEach((well) => {
      let row = tbody.append("tr");
      // loop through each value to add a cell for each of it
      Object.values(well).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
  }; // closing forEach

  //JQUERY TO ADD LINKS 
  $(document).ready(function () {
    $("tr td:nth-child(1)").each(function () { //ADD LINK TO THE FIRST CHILD OF EVERY TD, SO THE NAME OF THE WELL
      //$(this).html('<a href="https://cmlexploration.github.io/STprod/curves.html">' + $(this).text() + '</a>');
      $(this).html('<a href="http://127.0.0.1:5503/dist/curves.html">' + $(this).text() + '</a>');
      $(this).click(function () {
        sessionStorage.setItem('siteSelection', $(this).text())
      })
    });
  });
  buildTable(data)
};

createAnalysis(data);