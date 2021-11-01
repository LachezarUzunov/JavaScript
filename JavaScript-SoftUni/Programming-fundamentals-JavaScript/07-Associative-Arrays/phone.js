function phone(list) {
  let phoneList = {};

  for (let person of list) {
    let tokens = person.split(" ");
    let name = tokens[0];
    let num = tokens[1];

    phoneList[name] = num;
  }
  for (let key in phoneList) {
    console.log(`${key} -> ${phoneList[key]}`);
  }
}
phone([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
