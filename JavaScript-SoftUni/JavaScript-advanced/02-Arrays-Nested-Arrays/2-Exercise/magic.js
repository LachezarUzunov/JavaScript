function magic(array) {
  isMagical = false;

  let sum = 0;
  let compareSum = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let currentArr = array[i];
    let compare = array[i + 1];
    for (let j = 0; j < array.length; j++) {
      sum += currentArr[j];
      compareSum += compare[j];
    }

    if (sum == compareSum) {
      isMagical = true;
    } else {
      isMagical = false;
    }
    sum = 0;
    compareSum = 0;
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      let first = array[j][i];
      let second = array[j][i + 1];
      sum += first;
      compareSum += second;
    }
    if (sum == compareSum) {
      isMagical = true;
    } else {
      isMagical = false;
    }
    sum = 0;
    compareSum = 0;
  }
  console.log(isMagical);
}
magic([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
