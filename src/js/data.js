import { csv, json, select } from 'd3';

export const dataST = await json("../data/allProductionDataST.json").then((data) => {
    return data
});

export const dataET = await json("../data/allProductionDataET.json").then((data) => {
    return data;
});

// export const dataWT = await json("../data/allProductionDataWT.json").then((data) => {
//     return data;
// });

export const moDataST = await json("../data/dataMonthlyST.json").then((data) => {
    return data
});

export const moDataET = await json("../data/dataMonthlyET.json").then((data) => {
    return data
});

export const dataCumlST = await json("../data/cumlProdST.json").then((data) => {
    return data
});

export const dataCumlET = await json("../data/cumlProdET.json").then((data) => {
    return data
});

export const analyzeDataST = await json("../data/analyzeST.json").then((data) => {
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

export const pl23_22 = await json("../data\\pldata.json").then((data) => {
    return data
});

export const newProd = await csv("../data\\recYrProd.csv").then((data) => {
    return data
});

export const activeWells = () => {
    let data = dataET;
    if (sessionStorage.getItem('region') !== 'ET') data = dataST;
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
    if (window.innerWidth <= 768){
        for (let i=0; i<allData.length; i++){
            allData[i][0] = new Date(allData[i][0]).toISOString().split('T')[0].substring(5)
    }};

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