function loadingBar(number) {
  // create an array of 10 strings each one a dot;
  // substract 10 from the number and count the substractions
  // each time there is a substraction till = 0 replace a dot in the array with %

  let array = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  let substractCount = 0;

  if (number === 100) {
    console.log(`${number}% Complete!\n[%%%%%%%%%%]`);
  } else {
    for (let i = number - 10; i >= 0; i -= 10) {
      substractCount++;
    }
    array.splice(0, substractCount);

    for (let j = 1; j <= substractCount; j++) {
      array.unshift("%");
    }
    let arrayAsString = array.join("");
    console.log(`${number}% [${arrayAsString}]\nStill loading...`);
  }
}

loadingBar(30);
