import {} from './index'

let region = document.getElementById("region").textContent;
d3.json("../data/analyze"+region+".json").then((data) => {
  tableData = data;
  tbody = d3.select("tbody")

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
      $(this).html('<a href="https://cmlexploration.github.io/STprod/curves.html">' + $(this).text() + '</a>');
      //$(this).html('<a href="http://127.0.0.1:5502/curves.html">' + $(this).text() + '</a>');
      $(this).click(function () {
        sessionStorage.setItem('siteSelection', $(this).text())
        
      })
    });
  });



  buildTable(tableData)
});