// function sorting(array) {
//   let emptyArray = [];
//   for (let i = 0; i < array.length; i++) {
//     array.sort((a, b) => b - a);
//     let currentNum = array.shift();
//     emptyArray.push(currentNum);
//     array.sort((a, b) => a - b);
//     let smallest = array.shift();
//     emptyArray.push(smallest);
//     i = 0;
//   }
//   console.log(emptyArray.join(" "));
// }

// sorting([1, -21, 0, 18, 69, 1063, 31, 18, 18, 94]);

function sorting(numbers) {
  let sortedNumbers = [];
  let iterations = numbers.length;
  for (let i = 0; i < iterations; i++) {
    let number;
    if (i % 2 === 0) {
      number = Math.max(...numbers);
    } else {
      number = Math.min(...numbers);
    }
    sortedNumbers.push(number);
    numbers.splice(numbers.indexOf(number), 1);
  }
  console.log(sortedNumbers.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
