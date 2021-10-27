function equal(array) {
  let foundMatch = false;

  for (let i = 0; i < array.length; i++) {
    let index = i;
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < index; j++) {
      leftSum += array[j];
    }

    for (let j = index + 1; j < array.length; j++) {
      rightSum += array[j];
    }
    if (leftSum === rightSum) {
      foundMatch = true;
      console.log(index);
    }
  }
  if (foundMatch === false) {
    console.log("no");
  }
}

equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
