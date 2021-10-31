function convertToObj(string) {
  let object = JSON.parse(string);

  for (let key of Object.keys(object)) {
    console.log(`${key}: ${object[key]}`);
  }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
