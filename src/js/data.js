import { csv, json, select } from 'd3';

export const dataST = await json("../data/ST/prodST.json").then((data) => {
    return data
});
export const dataCumlST = await json("../data/ST/cumlProdST.json").then((data) => {
    return data
});
export const analyzeDataST = await json("../data/ST/analyzeST.json").then((data) => {
    return data
});
export const moDataST = await json("../data/ST/dataMonthlyST.json").then((data) => {
    return data
});
export const pump = await json("../data/ST/pumpInfo.json").then((data) => {
    return data
});
export const newProd = await csv("../data\\ST/recYrProd.csv").then((data) => {
    return data
});


export const dataET = await json("../data/ET/prodET.json").then((data) => {
    return data;
});
export const dataCumlET = await json("../data/ET/cumlProdET.json").then((data) => {
    return data
});
export const moDataET = await json("../data/ET/dataMonthlyET.json").then((data) => {
    return data
});
export const analyzeDataET = await json("../data/ET/analyzeET.json").then((data) => {
    return data
});

export const dataNM = await json("../data/NM/prodNM.json").then((data) => {
    return data;
});
export const dataCumlNM = await json("../data/NM/cumlProdNM.json").then((data) => {
    return data
});


export const dataGC = await json("../data/GC/prodGC.json").then((data) => {
    return data;
});
export const dataCumlGC = await json("../data/GC/cumlProdGC.json").then((data) => {
    return data
});


export const dataWT = await json("../data/WT/prodWT.json").then((data) => {
    return data;
});
export const dataCumlWT = await json("../data/WT/cumlProdWT.json").then((data) => {
    return data
});


export const econ = await json("../data/econ/economics.json").then((data) => {
    return data
});
export const payout = await json("../data/econ/payouts.json").then((data) => {
    return data
});
export const legacyEcon = await json("../data/econ/legacyEcon.json").then((data) => {
    return data
});
export const pl23_22 = await json("../data\\econ/pldata.json").then((data) => {
    return data
});

export const formations = await json("../data/misc/formations.json").then((data) => {
    return data
});

export const activeWells = () => {
    let region = sessionStorage.region
    let data = dataST;
    if (region == 'ET') data = dataET;
    if (region == 'GC') data = dataGC;
    if (region == 'WT') data = dataWT;
    if (region == 'NM') data = dataNM;

    const exitWell = data[0][0]
    const wells = new Set();
    
    for (let i = 0; i < data.length; i++) {
        const well = data[i][0];
        if (well !== 'Cornett #1 Swd') wells.add(well);
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
    console.log('allData')
    console.log(allData)

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