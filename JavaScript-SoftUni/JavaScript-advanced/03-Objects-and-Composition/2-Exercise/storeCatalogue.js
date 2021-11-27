function storeCatalogue(input) {
  let obj = {};

  input.forEach((element) => {
    let [product, price] = element.split(" : ");
    price = Number(price);

    let index = product[0];
    if (obj.hasOwnProperty(index) == false) {
      obj[index] = {};
    }

    obj[index][product] = price;
  });

  let sortedByLetter = Object.entries(obj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (el of sortedByLetter) {
    let sortedByProduct = Object.entries(el[1]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    console.log(el[0]);
    for (let el of sortedByProduct) {
      console.log(`  ${el[0]}: ${el[1]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
