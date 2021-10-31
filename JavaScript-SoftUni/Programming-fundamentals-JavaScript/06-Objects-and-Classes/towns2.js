function towns2(array) {
  let obj = {};
  for (let elements of array) {
    let tokens = elements.split(" | ");
    let town = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitude = Number(tokens[2]).toFixed(2);

    obj = {
      town: town,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(obj);
  }
}

towns2(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
