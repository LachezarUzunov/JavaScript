function convToJson(firstName, lastName, color) {
  let person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.hairColor = color;

  let jsonFile = JSON.stringify(person);
  console.log(jsonFile);
}

convToJson("George", "Jones", "Brown");
