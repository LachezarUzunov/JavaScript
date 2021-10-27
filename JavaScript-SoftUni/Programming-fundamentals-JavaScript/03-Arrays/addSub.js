function addSub(array) {
  let emptyArray = [];
  let oldSum = 0;
  let newSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      emptyArray.push(array[i] + i);
    } else {
      emptyArray.push(array[i] - i);
    }
    oldSum += array[i];
    newSum += emptyArray[i];
  }
  console.log(emptyArray);
  console.log(oldSum);
  console.log(newSum);
}

addSub([5, 15, 23, 56, 35]);
