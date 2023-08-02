import { json } from "d3";

export const dataGC = await json("../data/GC/prodGC.json").then(d => d);
export const dataCumlGC = await json("../data/GC/cumlProdGC.json").then(d => d);