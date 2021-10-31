function processOddPositions(array) {
  let emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      emptyArray.unshift(array[i] * 2);
    }
  }
  console.log(emptyArray.join(" "));
}

processOddPositions([10, 15, 20, 25]);
