function convert(string) {
  let obj = JSON.parse(string);

  for (let keys of Object.keys(obj)) {
    console.log(`${keys}: ${obj[keys]}`);
  }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
