// function addAndSubstract(num1, num2, num3) {
//   function add(number1, number2) {
//     let result = number1 + number2;
//     return result;
//   }
//   let sbor = add(num1, num2);

//   function substract(added, number3) {
//     let substracted = added - number3;
//     return substracted;
//   }
//   let finalResult = substract(sbor, num3);

//   console.log(finalResult);
// }

// addAndSubstract(23, 6, 10);

// SOFTUNI solution
function addAndSubstract(number1, number2, number3) {
  function sum(number1, number2) {
    let result = number1 + number2;
    return result;
  }

  function substracted(number1, number2) {
    let result = number1 - number2;
    return result;
  }

  let numbersSum = sum(number1, number2);
  let result = substracted(numbersSum, number3);
  return result;
}

let result = addAndSubstract(23, 6, 10);
console.log(result);
