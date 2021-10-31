// function catalogue(input) {
//   let list = [];
//   for (let products of input) {
//     let tokens = products.split(" : ");
//     let product = tokens[0];
//     let price = Number(tokens[1]);
//     let obj = {
//       product,
//       price,
//     };
//     list.push(obj);
//   }
//   list.sort((a, b) => a.product.localeCompare(b.product));

//   for (let product of list) {
//     console.log(
//       `${product.product[0]}\n  ${product.product}: ${product.price}`
//     );
//   }
// }

function catalog(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let products = new Map();
  for (let line of arr) {
    let data = line.split(" : ");
    let letter = data[0][0];
    if (!products.has(letter)) {
      products.set(letter, data);
    } else {
      products.set(letter, products.get(letter) + "," + data);
    }
  }
  let myProducts = new Map([...products.entries()]);
  for (let [letter, items] of myProducts) {
    console.log(letter);
    if (items.constructor !== Array) {
      items = items.split(",");
    }
    for (let i = 0; i < items.length; i += 2) {
      console.log(`  ${items[i]}: ${items[i + 1]}`);
    }
  }
}

catalog([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
