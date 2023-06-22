$(document).ready(function () {
    $("#header").load("../src/pages/header.html", function () {
        monitorRegion();
    });
});

const toggleRegion = () => {
    let currRegion = sessionStorage.getItem("region");
    if (currRegion == "st" || currRegion == null) {
        console.log("switching to east");
        sessionStorage.setItem("region", "et");
    } else {
        sessionStorage.setItem("region", "st");
    }
    sessionStorage.removeItem("siteSelection");
    location.reload();
};

export const monitorRegion = () => {
    let currRegion = sessionStorage.getItem("region");
    const fieldTitle = document.querySelector('#fieldTitle');   
    const regionBtn = document.querySelector("#toggleRegion");
    regionBtn.addEventListener('click', toggleRegion);
    const width = $(window).width();
    console.log('currRegion :>> ', currRegion);

    if (currRegion == "st" || currRegion == null) {
        regionBtn.innerHTML = "East Texas";
        fieldTitle.textContent = "South Texas Field";
        if (width < 768) {
            fieldTitle.textContent = "CML EXP - South Texas"
        };
    } else {
        regionBtn.innerHTML = "South Texas";
        fieldTitle.textContent = "East Texas Field";
        if (width < 768) {
            fieldTitle.textContent = "CML EXP - East Texas"
        };
    };
};





