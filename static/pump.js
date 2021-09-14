d3.json("./static/pumpInfo.json").then((data) => {
    tableData = data;
    tbody = d3.select("tbody")

 // CODE FOR CUMULATIVE PRODUCTION TABLE
 // function to import the data from recent.json, saved in this folder from Jupyter Notebook
 function buildTable(tableData) {
   //clear table
   tbody.html("");
     // loop thrugh data
     tableData.forEach((well) => {
       // for each well add a row to the tbody
       let row = tbody.append("tr");
       // loop through each value to add a cell for each of it
       Object.values(well).forEach((val) => {
         let cell = row.append("td");
         cell.text(val);
       })
     }); // closing forEach
   }; 

   buildTable(tableData)




function createDropdownOptions() {
    var partnerSelector = d3.select("#wellFilter"); //SELECT <select> WHERE PARTNER NAMES WILL APPEAR
    d3.json("./static/pumpInfo.json").then((allData) => { //READ IN JSON FILE COINTAING ALL PARTNER'S NAMES
        allData.forEach((well) => {
            partnerSelector
            .append('option')
            .text(well["Well Name"])
            .property('Value', well)
          });
  });
  };
  
  //CALL FUNCTION TO CREATE DROPDOWN MENU VALUES
  createDropdownOptions();

  function handleClick() {
    // the value entered in the sitename filter becomes the value for the siteName variable
    let requestedSiteName = d3.select("#wellFilter").property("value");
    console.log(requestedSiteName);
    // set data be filtered to imported data (the data ready to be filtered)
    let filteredData = tableData;
    console.log(filteredData[0])
   
      filteredData = filteredData.filter(row => row["Well Name"] == requestedSiteName)
      console.log(filteredData); //check to see what this looks like because i dont understand it
    
    //build table using the filteredData variable
    buildTable(filteredData);
  };

  d3.selectAll('#wellFilter').on("change", handleClick);


    
  //FUCTION TO CLEAR FILTERED TABLE, NEED TO CLEAR OUT THE DROPDOWN MENU FROM SELECTED OPTION
  function clearTable(tableData) {
    d3.json("./static/pumpInfo.json").then((data) => {
        tableData = data;
        tbody = d3.select("tbody");
        tbody.html("");
        tableData.forEach((well) => {
          let row = tbody.append("tr");
          Object.values(well).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            //CODE TO RESET DROPDOWN i.e. CLEAR SELECTION
            var dropDown = document.getElementById("wellFilter");  
            dropDown.selectedIndex = 0
          })})})};
    
 
   //LISTENER TO TRIGGER ClearTable FUNCTION
   d3.selectAll('#clear-filter-btn').on("click",clearTable);

  
});