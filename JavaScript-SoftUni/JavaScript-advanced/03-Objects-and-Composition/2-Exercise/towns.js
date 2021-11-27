function towns(input) {
  input.shift();
  let arr = [];
  for (let el of input) {
    let tokens = el.split(" | ");
    let townz = tokens[0].split("| ");
    let town = townz[1];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitudezz = tokens[2].split(" |");
    let longitude = Number(longitudezz[0]).toFixed(2);

    let current = {};
    current.Town = town;
    current.Latitude = Number(latitude);
    current.Longitude = Number(longitude);
    arr.push(current);
  }

  console.log(JSON.stringify(arr));
}
towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
