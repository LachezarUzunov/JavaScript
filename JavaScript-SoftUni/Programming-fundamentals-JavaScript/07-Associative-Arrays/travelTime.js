function travelTime(input) {
  let obj = {};

  for (let element of input) {
    let [country, town, cost] = element.split(" > ");

    if (!obj.hasOwnProperty(country)) {
      obj[country] = {};
    }

    if (!obj[country].hasOwnProperty(town)) {
      obj[country][town] = Number(cost);
    }

    if (obj[country].hasOwnProperty(town)) {
      obj[country][town] = Number(cost);
    }
  }

  let sorted = Object.entries(obj).sort(
    (a, b) =>
      a[0].localeCompare(b[0]) ||
      Object.values(b[1]).reduce((x, y) => x + y) -
        Object.values(a[1]).reduce((x, y) => x + y)
  );

  for (let [country, towns] of sorted) {
    let townsAsString = Object.entries(towns).map((x) => `${x[0]} -> ${x[1]}`);
    console.log(`${country} -> ${townsAsString.join(" ")}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Aarna > 25010",
  "Bulgaria > Lukovit > 10",
]);
