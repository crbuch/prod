let data = [1,2,4,0,99,33];
console.log(data);
const sorteer = (data) => {
    let temp = [...data];

    let sd = temp.sort((a, b) => {
        const aVal = a;
        const bVal = b;
        return bVal - aVal;
    });
    return sd
}; 
let ss = sorteer(data)
console.log(ss);
console.log(data);