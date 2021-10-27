function reverseArrayOfNumbers(num, array) {
  console.log(array.slice(0, num).reverse().join(" "));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
