function lowestPrices(input) {
  let obj = {};

  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);

    if (!obj[product]) {
      obj[product] = {};
    }

    obj[product][town] = price;
  }

  for (prod in obj) {
    const sorted = Object.entries(obj[prod]).sort((a, b) => a[1] - b[1]);
    console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}

lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 500",
  "New York | Burger | 10",
]);
