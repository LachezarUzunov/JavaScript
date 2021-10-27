function sumEvenNumbers2(array) {
  let sum = 0;
  for (let elements of array) {
    let currentNum = Number(elements);
    if (currentNum % 2 === 0) {
      sum += currentNum;
    }
  }
  console.log(sum);
}

sumEvenNumbers2(["2", "4", "6", "8", "10"]);
