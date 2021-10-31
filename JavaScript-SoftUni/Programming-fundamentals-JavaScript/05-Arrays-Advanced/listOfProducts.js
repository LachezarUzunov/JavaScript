function listOfProducts(array) {
  array.sort();
  for (let i = 1; i < array.length + 1; i++) {
    console.log(`${i}.${array[i - 1]}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
