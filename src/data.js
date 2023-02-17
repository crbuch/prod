import * as d3 from 'd3'

export const dataST = await d3.json("../data/allProductionData.json").then((data) => {
    return data
});

export const dataET = await d3.json("../data/allProductionDataET.json").then((data) => {
    return data
});

export const dataCuml = await d3.json("../data/cumProd.json").then((data) => {
    return data
});

export const dataCumlET = await d3.json("../data/cumProdET.json").then((data) => {
    return data
});

export const analyzeData = await d3.json("../data/analyze.json").then((data) => {
    return data
});

export const analyzeDataET = await d3.json("../data/analyzeET.json").then((data) => {
    return data
});

export const formations = await d3.json("../data/formations.json").then((data) => {
    return data
});

export const econ = await d3.json("../data/economics.json").then((data) => {
    return data
});

export const payout = await d3.json("../data/payouts.json").then((data) => {
    return data
});

export const pump = await d3.json("../data/pumpInfo.json").then((data) => {
    return data
});

//Creates Dropdown//
export const dropdown = (data, id) => {
    let menu = d3.select(id);
    let wells = [...new Set(data.map(row => row[0]))].sort();

    wells.forEach(well => {
        menu.append("option")
            .text(well)
            .property("Value", well);
    });
};

export const buildTable = (allData) => {
    const tbody = d3.select("tbody");
    tbody.html("");
    allData.forEach((well) => {
        let row = tbody.append("tr");
        //console.log(well)

        Object.values(well).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

export const filterData = (data, dropdownId) => {
    let reqWell = d3.select(dropdownId).property("value");

    if (reqWell) {
        return data.filter((row) => row[0] == reqWell);
    };
    return data
};

export const sortData = (data, pos) => {
    event.preventDefault();
    let temp = [...data];
    let sorted;
    sorted = temp.sort((a, b) => {
        const aVal = a[pos];
        const bVal = b[pos];
        return bVal - aVal;
    });
    buildTable(sorted);
};


