function equalLists(array1, array2) {
  let sum = 0;
  let areIdentical = true;

  for (let i = 0; i < array1.length; i++) {
    if (Number(array1[i]) === Number(array2[i])) {
      sum += Number(array1[i]);
    } else {
      areIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }

  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalLists(["10", "20", "30"], ["10", "20", "30"]);
