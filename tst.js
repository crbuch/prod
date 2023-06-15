async function init() {
    let data = await d3.json("../data/23_22Pl.json").then((data) => {
        return data
    });
    data = data[0]
    console.log('data :>> ', data);
    let jan = 0
    for (let [well, mo] of Object.entries(data)) {
      console.log('well :>> ', well);
      console.log('mo :>> ', mo);
    }
  
}


init()