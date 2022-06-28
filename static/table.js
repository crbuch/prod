// Cumulative production
d3.json('./static/cumProd.json').then((data) => {
  //console.log(data);

tableData = data;

//global declaration of tbody, since it will be accessed in and out of functions
tbody = d3.select("tbody")

// CODE FOR CUMULATIVE PRODUCTION TABLE
// function to import the data from recent.json, saved in this folder from Jupyter Notebook
function buildTable(tableData) {
 //clear table
 tbody.html("");
   // loop thrugh data
   tableData.forEach((well) => {
     //console.log(well)
     // for each well add a row to the tbody
     let row = tbody.append("tr");
     // loop through each value to add a cell for each of it
     Object.values(well.slice(0,4)).forEach((val) => {
       let cell = row.append("td");
       cell.text(val);
     })
   }); // closing forEach
 }; //closing d3

 buildTable(tableData)

function createDropdownOptions() {
  var partnerSelector = d3.select("#siteFilter"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
  d3.json("./static/allProductionData.json").then((allData) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
    repeatedWells = [] //EMPTY ARRAY TO CONTAIN ALL PARTNER'S NAME (REPEATED)
    allData.forEach((row) => { //LOOP THROUGH NET_INTEREST FILE
    repeatedWells.push(row[0]) //PUSH ALL PARTNER'S NAME TO LIST 
  });
  wells = [...new Set(repeatedWells)].sort()
  wells.forEach((well) => {
    partnerSelector
    .append('option')
    .text(well)
    .property('Value', well)
  });
});
};

//CALL FUNCTION TO CREATE DROPDOWN MENU VALUES
createDropdownOptions();

function handleClick() {
  // the value entered in the sitename filter becomes the value for the siteName variable
  let requestedSiteName = d3.select("#siteFilter").property("value");
  // set data be filtered to imported data (the data ready to be filtered)
  let filteredData = tableData;
  if (requestedSiteName) {
    filteredData = filteredData.filter(row => row[0] == requestedSiteName)
    console.log(filteredData); 
  };
  //build table using the filteredData variable
  buildTable(filteredData);
};


//build table as soon as page loads
buildTable(tableData);

//create listener for when user wants to filter data
d3.selectAll('#siteFilter').on("change", handleClick);

//FUCTION TO CLEAR FILTERED TABLE
function clearTable(tableData){
  d3.json('./static/cumProd.json').then((data) => {
    tableData = data;
    tbody = d3.select("tbody");
    tbody.html("");
    tableData.forEach((well) => {
      let row = tbody.append("tr");
      Object.values(well).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        //CODE TO RESET DROPDOWN i.e. CLEAR SELECTION
        var dropDown = document.getElementById("siteFilter");  
        dropDown.selectedIndex = 0
      })})})};
  
 //LISTENER TO TRIGGER ClearTable FUNCTION
 d3.selectAll('#clear-filter-btn').on("click", clearTable);
});
async function sortByProd(){
  event.preventDefault();
  let allData = await d3.json('./static/cumProd.json');

  allData.sort((a,b) => {//sorts data high to low by oil production
    const aVal = a[1];
    const bVal = b[1];
    return bVal - aVal
  });

  buildTable(allData)
};


function buildTable(allData) {
  tbody.html("");
    allData.forEach((well) => {
      let row = tbody.append("tr");
      Object.values(well.slice(0,4)).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      })
    });
  }; 

d3.select("#Prodfilter").on("click", function(){sortByProd()})

