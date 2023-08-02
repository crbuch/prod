import { select } from 'd3';


export const activeWells = (data) => {
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
export const dropdown = (id,data) => {
    let menu = select(id);
    activeWells(data).forEach(well => {
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