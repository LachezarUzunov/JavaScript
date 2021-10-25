function sequence(input) {
  let n = Number(input[0]);

  let currentNumber = 1;
  console.log(currentNumber);
  while (currentNumber <= n) {
    currentNumber = currentNumber * 2 + 1;

    if (currentNumber <= n) {
      console.log(currentNumber);
    }
  }
}

sequence(["7"]);                                                                                                    
