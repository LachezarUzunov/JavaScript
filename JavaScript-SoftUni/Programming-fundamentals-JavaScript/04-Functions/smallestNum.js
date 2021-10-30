// function smallestNum(num1, num2, num3) {
//   let smallest = num1;

//   if (num2 < num1 && num2 < num3) {
//     smallest = num2;
//   } else if (num3 < num1 && num2) {
//     smallest = num3;
//   }

//   return smallest;
// }

// let result = smallestNum(2, 3, 1);
// console.log(result);

function smallestNum(num1, num2, num3) {
  let smallest = Math.min(num1, num2, num3);
  return smallest;
}
let result = smallestNum(4, 5, 6);
console.log(result);
