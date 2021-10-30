// function palindromeNums(arrayOfNums) {
//   for (let i = 0; i < arrayOfNums.length; i++) {
//     let currentNumAsString = arrayOfNums[i].toString();
//     let tempNum = "";
//     for (let j = currentNumAsString.length - 1; j >= 0; j--) {
//       tempNum += currentNumAsString[j];
//     }

//     if (Number(tempNum) === Number(currentNumAsString)) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//     tempNum = "";
//   }
// }

// palindromeNums([123, 323, 421, 121]);

// SOFTUNI SOLUTION
function palindromeIntegers(listOfNumbers) {
  for (let number of listOfNumbers) {
    let numberAsString = number.toString();
    let reversedNumberAsString = numberAsString.split("").reverse().join("");
    if (numberAsString === reversedNumberAsString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
