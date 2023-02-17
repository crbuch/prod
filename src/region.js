const regionBtn = document.querySelector("#switchRegion");
const fieldTitle = document.querySelector('#fieldTitle');

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
    let currRegion = sessionStorage.getItem("region");
    if (currRegion == "st" || currRegion == null) {
        regionBtn.innerHTML = "East Texas";
        fieldTitle.textContent = "South Texas Field";
    } else {
        regionBtn.innerHTML = "South Texas";
        fieldTitle.textContent = "East Texas Field";
    }
};

monitorRegion();
regionBtn.addEventListener('click', change);



