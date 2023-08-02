$(document).ready(function () {
    $("#header").load("../src/pages/header.html");
});


export const monitorRegion = () => {
    if(sessionStorage.getItem('regionName')==null){
        sessionStorage.setItem('regionName','South Texas')
        sessionStorage.setItem('region','ST')
    }

    document.getElementById('currField').innerText = sessionStorage.getItem('regionName')
    // Click event listeners
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            sessionStorage.setItem('region', this.id) // set 'region' to abbreviation
            document.getElementById('currField').innerText = this.innerText; // 
            sessionStorage.setItem('regionName', this.innerText) // set 'regionName' to real 
            sessionStorage.removeItem("siteSelection");
            location.reload();

        });
    });
};





