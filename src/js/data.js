import { json, select } from 'd3';

export const dataST = await json("../data/allProductionData.json").then((data) => {
    return data
});

export const dataET = await json("../data/allProductionDataET.json").then((data) => {
    return data;
});

export const dataCuml = await json("../data/cumProd.json").then((data) => {
    return data
});

export const dataCumlET = await json("../data/cumProdET.json").then((data) => {
    return data
});

export const analyzeData = await json("../data/analyze.json").then((data) => {
    return data
});

export const analyzeDataET = await json("../data/analyzeET.json").then((data) => {
    return data
});

export const formations = await json("../data/formations.json").then((data) => {
    return data
});

export const econ = await json("../data/economics.json").then((data) => {
    return data
});

export const payout = await json("../data/payouts.json").then((data) => {
    return data
});

export const pump = await json("../data/pumpInfo.json").then((data) => {
    return data
});

export const legacyEcon = await json("../data/legacyEcon.json").then((data) => {
    return data
});

export const activeWells = () => {
    let data = dataET;
    if (sessionStorage.getItem('region') !== 'et') data = dataST;
    const exitWell = data[0][0]
    const wells = new Set();
    
    for (let i = 0; i < data.length; i++) {
        const well = data[i][0];
        wells.add(well);
        if (well === exitWell & i !== 0) break;
    };

    return wells;
};

//Creates Dropdown//
export const dropdown = (id) => {
    let menu = select(id);
    
    activeWells().forEach(well => {
        menu.append("option")
            .text(well)
            .property("Value", well);
    });
};

export const buildTable = (allData) => {
    const tbody = select("tbody");
    tbody.html("");
    allData.forEach((well) => {
        let row = tbody.append("tr");
        Object.values(well).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

export const filterData = (data, dropdownId) => {
    let reqWell = select(dropdownId).property("value");

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


