function magicNumTwo(array, num) {
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let sum = currentNum + array[j];
      if (sum === num) {
        console.log(`${currentNum} ${array[j]}`);
      }
    }
  }
}

magicNumTwo([14, 20, 60, 13, 7, 19, 8], 27);
