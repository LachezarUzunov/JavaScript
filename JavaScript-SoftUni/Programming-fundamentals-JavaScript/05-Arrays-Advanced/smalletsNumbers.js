function smallestNumbers(array) {
  let sliced = array.sort((a, b) => a - b).slice(0, 2);
  console.log(sliced.join(" "));
}

smallestNumbers([3, 0, 10, 4, 7, 3]);
