function maxSequence2(array) {
  let isLongest = false;
  let count = 0;
  let endArray = [];

  for (let i = 0; i < array.length; i++) {
    let currentN = array[i];
    let currentCount = 0;
    let emptyArr = [];
    for (let j = i + 1; j < array.length; j++) {
      let newCurrent = array[j];

      if (newCurrent === currentN) {
        currentCount++;
        emptyArr.push(currentN);
      } else {
        break;
      }
    }
    if (currentCount > count) {
      count = currentCount;
      isLongest = true;
      endArray = emptyArr;
      endArray.push(currentN);
    }
  }
  console.log(endArray.join(" "));
}

maxSequence2([1, 1, 1, 2, 3, 1, 3, 3]);
