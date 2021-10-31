function bomb(array1, array2) {
  let specialNum = array2[0];
  let power = array2[1];
  let numsToDelete = power * 2 + 1;

  while (array1.includes(specialNum)) {
    if (power === 0) {
      array1.splice(array1.indexOf(specialNum), 1);
    } else {
      let start = array1.indexOf(specialNum) - power;
      if (start < 0) {
        start = 0;
      }
      array1.splice(start, numsToDelete);
    }
  }

  let sum = 0;
  for (let elements of array1) {
    sum += elements;
  }
  console.log(sum);
}

bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 10]);
