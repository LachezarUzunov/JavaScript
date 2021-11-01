function phoneBook(array) {
  let obj = {};

  for (let keys of array) {
    let tokens = keys.split(" ");
    let name = tokens[0];
    let value = tokens[1];

    obj[name] = value;
  }
  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
