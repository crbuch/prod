$(document).ready(function () {
    $("#header").load("../src/pages/header.html", function () {
        // monitorRegion();
    });
});

// When Region is clicked:
function updateDropdownToggleText() {
    sessionStorage.removeItem("siteSelection"); // Remove well location
    location.reload();
};
export const monitorRegion = () => {
    console.log(sessionStorage.getItem("region"))
    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')
    // Click event listeners
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation
            document.getElementById('currField').innerText = this.innerText; // 
            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real 
            updateDropdownToggleText();
        });
    });
};





