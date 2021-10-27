function magicSum(list, num) {
  for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];

    for (let j = i + 1; j < list.length; j++) {
      let calculateNum = list[j];
      let sum = currentNum + calculateNum;
      if (sum === num) {
        console.log(`${currentNum} ${calculateNum}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 7, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);
