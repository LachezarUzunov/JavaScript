function numberModification(number) {
  let numAverageValue = 0;
  let digitsCount = 0;
  let numValue = 0;

  let numAsString = number.toString();

  for (let i = 0; i < numAsString.length; i++) {
    //find sum of the digits of the number
    digitsCount++;
    numValue += Number(numAsString[i]);
  }

  // find the average value of the digits by dividing the digits' sum to the number of digits
  numAverageValue = numValue / digitsCount;

  // check if over 5, if so - print the number
  if (numAverageValue >= 5) {
    console.log(number);
  } else {
    // if not add 9 and check again if lower than 5 or not
    while (numAverageValue < 5) {
      numAsString = numAsString + 9;
      let newDigitsCount = 0;
      let newNumValue = 0;
      for (let i = 0; i < numAsString.length; i++) {
        newDigitsCount++;
        newNumValue += Number(numAsString[i]);
      }
      numAverageValue = newNumValue / newDigitsCount;
    }
  }
  console.log(numAsString);
}
numberModification(101);

function numberModification(num) {
  let numInArray = num.toString().split("");
  let sum = 0;
  let result = num.toString();

  while (true) {
    for (let i = 0; i < numInArray.length; i++) {
      sum += Number(numInArray[i]);

      if (sum / numInArray.length > 5) {
        return result;
      }
    }

    result += 9;
    numInArray.push("9");
    sum = 0;
  }
}
