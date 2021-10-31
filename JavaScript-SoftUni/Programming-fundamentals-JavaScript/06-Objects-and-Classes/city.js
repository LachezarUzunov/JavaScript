function city(obj) {
  for (let keys of Object.keys(obj)) {
    console.log(`${keys} -> ${obj[keys]}`);
  }
}

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
