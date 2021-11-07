function sameNumbers(word) {
  let asString = word.toString();
  let sum = 0;
  let areTheSame = true;

  for (let i = 0; i < asString.length - 1; i++) {
    if (asString[i] !== asString[i + 1]) {
      areTheSame = false;
    }
  }

  for (let i = 0; i < asString.length; i++) {
    sum += Number(asString[i]);
  }
  console.log(areTheSame);
  console.log(sum);
}

sameNumbers(2222222);
