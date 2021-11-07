function biggestEl(arr) {
  let arrOfBiggest = [];

  arr.forEach((array) => {
    let sorted = array.sort((a, b) => b - a);
    arrOfBiggest.push(sorted[0]);
  });

  let sorted = arrOfBiggest.sort((a, b) => b - a);
  let big = sorted[0];
  return big;
}

biggestEl([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
