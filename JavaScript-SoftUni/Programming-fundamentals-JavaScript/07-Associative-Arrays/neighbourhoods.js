function neighbourhoods(list) {
  let obj = {};
  let neighbourhoodArray = list.shift().split(", ");
  for (let element of neighbourhoodArray) {
    obj[element] = [];
  }
  for (let person of list) {
    let tokens = person.split(" - ");
    let neighbour = tokens[0];
    let name = tokens[1];

    if (obj.hasOwnProperty(neighbour)) {
      obj[neighbour].push(name);
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
  for (let element of sorted) {
    console.log(`${element[0]}: ${element[1].length}`);
    if (element[1].length > 0) {
      console.log(`--${element[1].join("\n--")}`);
    }
  }
}
neighbourhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
