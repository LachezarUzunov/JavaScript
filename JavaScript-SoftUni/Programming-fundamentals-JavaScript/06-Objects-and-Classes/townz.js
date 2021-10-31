function townz(input) {
  for (let element of input) {
    let obj = {};
    let tokens = element.split(" | ");
    let town = tokens[0];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitude = Number(tokens[2]).toFixed(2);

    obj.town = town;
    obj.latitude = latitude;
    obj.longitude = longitude;
    console.log(obj);
  }
}

townz(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
