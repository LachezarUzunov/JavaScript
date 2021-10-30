function OddAndEvenSum(number) {
  let numAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let currentNum = Number(numAsString[i]);
    if (currentNum % 2 === 0) {
      evenSum += currentNum;
    } else {
      oddSum += currentNum;
    }
  }
  let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  return resultString;
}

let result = OddAndEvenSum(1000435);
console.log(result);
