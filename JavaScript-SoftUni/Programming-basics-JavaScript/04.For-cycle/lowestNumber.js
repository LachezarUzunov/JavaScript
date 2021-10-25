function lowestNumber(input) {
  let n = Number(input[0]);

  let lowestNumber = 0;

  for (i = 1; i <= n; i++) {
    let currentNumber = Number(input[i]);

    if (currentNumber < lowestNumber) {
      lowestNumber = currentNumber;
    } else {
        console.log(currentNumber);
    }
  }

  console.log(lowestNumber);
}

lowestNumber(["3", "45", "7", "99"]);
