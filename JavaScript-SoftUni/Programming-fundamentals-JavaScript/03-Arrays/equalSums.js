function equalSums(list) {
  // it should calculate the sum on the left and the sum of the digits
  // on the right of the index
  let hasFoundRestult = false;

  for (let i = 0; i < list.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += list[leftIndex];
    }

    for (let k = i + 1; k < list.length; k++) {
      rightSum += list[k];
    }

    if (rightSum === leftSum) {
      console.log(i);
      hasFoundRestult = true;
      break;
    }
  }
  if (!hasFoundRestult) {
    console.log("no");
  }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
