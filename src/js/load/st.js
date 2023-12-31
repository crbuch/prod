import { csv, json } from 'd3';

export const dataST = await json("../data/ST/prodST.json").then((data) => {
    return data
});
export const dataCumlST = await json("../data/ST/cumlProdST.json").then((data) => {
    return data
});
export const mnthDataST = await json("../data/ST/dataMonthlyST.json").then((data) => {
    return data
});
export const pump = await json("../data/ST/pumpInfo.json").then((data) => {
    return data
});
export const econ = await json("../data/econ/economics.json").then((data) => {
    return data
});
export const payout = await json("../data/econ/payouts.json").then((data) => {
    return data
});

export const formations = await json("../data/misc/formations.json").then((data) => {
    return data
});