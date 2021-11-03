function sumOfNumbers(fromN, toM) {
  let nAsNum = Number(fromN);
  let mAsNum = Number(toM);
  let sum = 0;

  for (let i = nAsNum; i <= mAsNum; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers("-8", "20"));
