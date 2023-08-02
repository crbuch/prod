import { json } from "d3";

export const dataWT = await json("../data/WT/prodWT.json").then(d => d);
export const dataCumlWT = await json("../data/WT/cumlProdWT.json").then(d => d);