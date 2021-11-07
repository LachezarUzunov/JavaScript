function equalNeighbours(array) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let compareArray = array[i];
    let comparedArray = array[i + 1];
    for (let j = 0; j < compareArray.length; j++) {
      let currentNum = compareArray[j];
      let comparedNum = comparedArray[j];
      if (currentNum == comparedNum) {
        count++;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    for (let j = 0; j < currentArray.length; j++) {
      let currentN = currentArray[j];
      let followingN = currentArray[j + 1];
      if (currentN == followingN) {
        count++;
      }
    }
  }
  console.log(count);
}

// equalNeighbours([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);

equalNeighbours([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
