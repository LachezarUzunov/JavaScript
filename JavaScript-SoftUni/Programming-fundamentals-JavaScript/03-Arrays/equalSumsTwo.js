function equalSumsTwo(array) {
  // check if a number and all the other digits on the right are equal,
  // if not then calculate the two numbers and all the ones on the right
  // till a match is found

  let hasFoundMatch = false;

  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += array[leftIndex];
    }

    for (let rightIndex = i + 1; rightIndex < array.length; rightIndex++) {
      rightSum += array[rightIndex];
    }

    if (leftSum === rightSum) {
      console.log(i);
      hasFoundMatch = true;
      break;
    }
  }

  if (!hasFoundMatch) {
    console.log("no");
  }
}

equalSumsTwo([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
