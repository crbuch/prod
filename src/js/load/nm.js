import { json } from 'd3';

export const dataNM = await json("../data/NM/prodNM.json").then(d => d)
export const dataCumlNM = await json("../data/NM/cumlProdNM.json").then(d => d);
export const formations = await json("../data/misc/formations.json").then((data) => {
    return data
});