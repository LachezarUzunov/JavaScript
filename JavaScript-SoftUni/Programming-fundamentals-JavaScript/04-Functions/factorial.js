function factorial(factorOne, factorTwo) {
  // needs to multiply all the numbers from 1 to factor

  let resultFactorOne = 1;
  let resultFactorTwo = 1;

  for (let i = 1; i <= factorOne; i++) {
    resultFactorOne = resultFactorOne * i;
  }

  for (let j = 1; j <= factorTwo; j++) {
    resultFactorTwo = resultFactorTwo * j;
  }

  return (resultFactorOne / resultFactorTwo).toFixed(2);
}

let endResult = factorial(5, 2);
console.log(endResult);
