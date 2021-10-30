function signCheck(numOne, numTwo, numThree) {
  if (numOne < 0) {
    if (numTwo < 0 && numThree < 0) {
      console.log("Negative");
    } else if (numTwo > 0 && numThree > 0) {
      console.log("Negative");
    } else {
      console.log("Positive");
    }
  } else if (numOne > 0) {
    if (numTwo < 0 && numThree < 0) {
      console.log("Positive");
    } else if (numOne > 0) {
      if (numTwo > 0 && numThree > 0) {
        console.log("Positive");
      } else {
        console.log("Negative");
      }
    }
  }
}
signCheck(-5, 1, 1);
