// function extract(array) {
//   let newArray = [];
//   let first = array.shift();
//   newArray.push(first);
//   for (let el of array) {
//     if (el >= newArray[newArray.length - 1]) {
//       newArray.push(el);
//     }
//   }
//   return newArray;
// }

// function extract(array) {
//   let first = array.shift();
//   let newArrs = [];
//   newArrs.push(first);
//   array.filter((x) => {
//     if (x >= newArrs[newArrs.length - 1]) {
//       newArrs.push(x);
//     }
//   });
//   return newArrs;
// }

// function extract(array) {
//   let biggest = Number.MIN_SAFE_INTEGER;
//   let newArr = array.filter((el) => {
//     if (el >= biggest) {
//       biggest = el;
//       return true;
//     }
//     return false;
//   });
//   console.log(newArr);
// }

function extract(array) {
  let result = [];
  let biggest = Number.MIN_SAFE_INTEGER;
  array.forEach((el) => {
    if (el >= biggest) {
      result.push(el);
      biggest = el;
    }
  });
  console.log(result);
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
