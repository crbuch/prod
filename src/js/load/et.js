import { json } from 'd3';

export const dataET = await json("../data/ET/prodET.json").then((data) => {
    return data;
});
export const dataCumlET = await json("../data/ET/cumlProdET.json").then((data) => {
    return data
});
export const mnthDataET = await json("../data/ET/dataMonthlyET.json").then((data) => {
    return data
});
export const analyzeDataET = await json("../data/ET/analyzeET.json").then((data) => {
    return data
});

export const formations = await json("../data/misc/formations.json").then((data) => {
    return data
});