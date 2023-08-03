import { csv } from "d3";
export const recYrProd = await csv("../data\\ST/recYrProd.csv").then(d => d);