$(document).ready(function () {
    console.log("loading header");
    $("#header").load("../src/pages/header.html", function () {
        monitorRegion();
    });
});

const change = () => {
    let currRegion = sessionStorage.getItem("region");
    if (currRegion == "st" || currRegion == null) {
        console.log("switching to east");
        sessionStorage.setItem("region", "et");
    } else {
        sessionStorage.setItem("region", "st");
    }
};

const monitorRegion = () => {
    const regionBtn = document.querySelector("#switchRegion");
    const fieldTitle = document.querySelector('#fieldTitle');   
    const width = $(window).width();
    let currRegion = sessionStorage.getItem("region");
    regionBtn.addEventListener('click', change);

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





