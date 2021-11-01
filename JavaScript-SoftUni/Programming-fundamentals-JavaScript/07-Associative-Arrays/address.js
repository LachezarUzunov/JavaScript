function address(list) {
  let obj = {};

  for (let person of list) {
    let tokens = person.split(":");
    let name = tokens[0];
    let addr = tokens[1];

    if (obj.hasOwnProperty(name)) {
      obj[name] = addr;
    } else {
      obj[name] = addr;
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
  for (let element of sorted) {
    console.log(`${element[0]} -> ${element[1]}`);
  }
}
address([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
