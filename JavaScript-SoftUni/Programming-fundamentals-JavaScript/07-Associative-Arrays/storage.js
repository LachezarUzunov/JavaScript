// function storage(products) {
//   let list = {};

//   for (let elements of products) {
//     let tokens = elements.split(" ");
//     let product = tokens[0];
//     let quantity = Number(tokens[1]);

//     if (list.hasOwnProperty(product)) {
//       list[product] += quantity;
//     } else {
//       list[product] = quantity;
//     }
//   }
//   for (let singleProduct in list) {
//     console.log(`${singleProduct} -> ${list[singleProduct]}`);
//   }
// }

function storage(products) {
  let map = new Map();

  for (let strings of products) {
    let tokens = strings.split(" ");
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (!map.has(product)) {
      map.set(product, quantity);
    } else {
      let currentQuantity = map.get(product);
      let newQuantity = currentQuantity + quantity;
      map.set(product, newQuantity);
    }
  }
  for (let [key, value] of map) {
    console.log(`${key} -> ${value}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
