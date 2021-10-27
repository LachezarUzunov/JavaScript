function primeNumChecker(number) {
  if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}

primeNumChecker(7);
primeNumChecker(8);
primeNumChecker(81);
