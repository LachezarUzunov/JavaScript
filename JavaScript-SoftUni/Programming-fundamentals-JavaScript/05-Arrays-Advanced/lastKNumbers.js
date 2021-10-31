// function lastKNumbers(length, k) {
//   let array = [1];
//   let nextDigit = 1;

//   for (let i = 0; i < length; i++) {
//     let currentArray = array.slice(array.length - k);
//     if (array.length < 2) {
//       array.push(nextDigit);
//     } else {
//       array.push(currentArray[0] + currentArray[currentArray.length - 1]);
//     }
//   }
//   console.log(array);
// }

function lastKNumbers(length, k) {
  let result = [1];

  for (let i = 1; i < length; i++) {
    let elements = result.slice(-k);

    let current = 0;

    for (let num of elements) {
      current += num;
    }

    result.push(current);
  }

  console.log(result.join(" "));
}

lastKNumbers(6, 3);
