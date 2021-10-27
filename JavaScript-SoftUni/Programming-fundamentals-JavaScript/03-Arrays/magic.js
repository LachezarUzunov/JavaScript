function magic(array, num) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentN = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let newCurrent = array[j];
      let sum = currentN + newCurrent;
      if (sum === num) {
        console.log(`${currentN} ${newCurrent}`);
      }
    }
  }
}
magic([14, 20, 60, 13, 7, 19, 8], 27);
