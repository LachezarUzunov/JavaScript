function processOdd(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i += 2) {
    newArr.push(array[i] * 2);
  }
  return newArr.reverse();
}

console.log(processOdd([10, 15, 20, 25]));
