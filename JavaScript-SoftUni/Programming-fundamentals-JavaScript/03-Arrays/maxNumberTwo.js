function maxNumberTwo(array) {
  let topIntegers = [];
  for (let i = 0; i < array.length; i++) {
    let isTopNum = true;
    let currentNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let newCurrent = array[j];
      if (currentNum <= newCurrent) {
        isTopNum = false;
        break;
      }
    }
    if (isTopNum) {
      topIntegers.push(currentNum);
    }
  }
  console.log(topIntegers.join(" "));
}

maxNumberTwo([41, 41, 34, 20]);
