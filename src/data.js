import * as d3 from 'd3'

export const dataST = await d3.json("../data/allProductionData.json").then((data) => {
    return data
});

export const dataET = await d3.json("../data/allProductionDataET.json").then((data) => {
    return data
});

export const analyzeData = await d3.json("../data/analyze.json").then((data) => {
    return data
});

export const analyzeDataET = await d3.json("../data/analyze.json").then((data) => {
    return data
});

//Creates Dropdown//
export const dropdown = (data,id) => {
    let menu = d3.select(id);
    let wells = [...new Set(data.map(row => row[0]))].sort();
    
    wells.forEach(well => {
      menu.append("option")
        .text(well)
        .property("Value", well);
    });
};

