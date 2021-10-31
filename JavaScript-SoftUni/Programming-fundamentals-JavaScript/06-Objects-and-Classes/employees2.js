function employees2(input) {
  for (let each of input) {
    let obj = {
      Name: each,
      PersonalNumber: each.length,
    };
    console.log(`Name: ${obj.Name} -- Personal Number: ${obj.PersonalNumber}`);
  }
}

employees2([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
