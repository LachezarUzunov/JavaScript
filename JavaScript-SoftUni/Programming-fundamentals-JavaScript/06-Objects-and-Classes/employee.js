function employee(params) {
  let list = {};

  for (let elements of params) {
    let name = elements;
    let personalNum = elements.length;

    list[name] = personalNum;
  }

  for (let key in list) {
    console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
  }
}
employee([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
