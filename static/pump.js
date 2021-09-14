d3.json("./static/pumpInfo.json").then((data) => {
    console.log(Object.getOwnPropertyNames(data[0]));
    tbody = d3.select("tbody");

    tbody.html("");

    data.forEach((well) => {
        let row = tbody.append("tr");
        Object.values(well).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    })
})
});

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

    

  
 
 
//  function buildTable(tableData) {
        
        

// }; //closing function

// buildTable(tableData)