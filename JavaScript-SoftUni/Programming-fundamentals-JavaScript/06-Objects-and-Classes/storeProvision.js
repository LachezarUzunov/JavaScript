function storeProvision(array1, array2) {
  class Store {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  }

  for (let i = 0; i < array1.length; i += 2) {
    let currentProduct = array1[i];

    for (let j = 0; j < array2.length; j += 2) {
      let neededCurrent = array2[j];

      if (currentProduct === neededCurrent) {
        array1[i + 1] = Number(array1[i + 1]) + Number(array2[j + 1]);
        array2.splice(j, 2);
      }
    }
  }
  array1.push(...array2);
  let newObj = {};
  for (let i = 0; i < array1.length; i += 2) {
    let product = array1[i];
    let quantity = array1[i + 1];

    newObj = new Store(product, quantity);
    console.log(`${newObj.product} -> ${newObj["quantity"]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
