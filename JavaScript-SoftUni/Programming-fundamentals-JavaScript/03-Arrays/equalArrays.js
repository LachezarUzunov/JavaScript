function equalArrays(array1, array2) {
  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1.length)
      if (Number(array1[i]) === Number(array2[i])) {
        sum += Number(array1[i]);
      } else {
        isIdentical = false;
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
      }
  }
  if (isIdentical !== false) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }

  let isIdentical = true;
  for (let i = 0; i < array1.length; i++) {
    array1[i] = Number(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    array2[i] = Number(array2[i]);
  }
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    } else {
      sum += array1[i];
    }
  }
  if (isIdentical !== false) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20"], ["10", "20", "30"]);
console.log("-----------------");
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
console.log("-----------------");
equalArrays(["1"], ["10"]);
