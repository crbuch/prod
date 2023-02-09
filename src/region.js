import * as dh from './data.js';
export const regionBtn = document.querySelector("#switchRegion");
console.log("in region");
export const change = () => {
    let currRegion = sessionStorage.getItem("region");
    if (currRegion == "st") {
        console.log("switching to east");
        sessionStorage.setItem("region", "et");
        regionBtn.innerHTML = "South Texas";
        
    } else {
        sessionStorage.setItem("region", "st");
        regionBtn.innerHTML = "East Texas";
    }
};

