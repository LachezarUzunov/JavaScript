function employees(input) {
  for (let employee of input) {
    let obj = {
      Name: employee,
      PersonalNumber: employee.length,
    };
    console.log(
      `Name: ${obj.Name} -- Personal Number: ${obj["PersonalNumber"]}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
