function store(currentStock, products) {
  let obj = {};

  for (let i = 0; i < products.length; i += 2) {
    let currentProduct = products[i];
    let currentQuantity = Number(products[i + 1]);

    if (!currentStock.includes(currentProduct)) {
      currentStock.push(currentProduct, currentQuantity);
    } else {
      let index = currentStock.indexOf(currentProduct);
      currentStock[index + 1] =
        currentQuantity + Number(currentStock[index + 1]);
    }
  }
  for (let i = 0; i < currentStock.length; i += 2) {
    let product = currentStock[i];
    let quantity = Number(currentStock[i + 1]);

    obj[product] = quantity;
  }

  for (let product in obj) {
    console.log(`${product} -> ${obj[product]}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
