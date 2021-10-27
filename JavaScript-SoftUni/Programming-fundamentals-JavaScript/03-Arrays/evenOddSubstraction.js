function evenOddSub(array) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (currentNum % 2 === 0) {
      sumEven += currentNum;
    } else {
      sumOdd += currentNum;
    }
  }

  console.log(sumEven - sumOdd);
}

evenOddSub([1, 2, 3, 4, 5, 6]);
console.log("------------");
evenOddSub([3, 5, 7, 9]);
console.log("------------");
evenOddSub([2, 4, 6, 8, 10]);
