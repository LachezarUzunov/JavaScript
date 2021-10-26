//function decend(num1, num2, num3) {
//   let highestNum = Number.MIN_SAFE_INTEGER;
//   let lowestNum = Number.MAX_SAFE_INTEGER;
//   if (num1 >= num2 && num1 >= num3) {
//     highestNum = num1;
//   } else if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
//     middleNum = num1;
//   } else if (num1 <= num2 && num1 <= num3) {
//     lowestNum = num1;
//   }

//   if (num2 >= num1 && num2 >= num3) {
//     highestNum = num2;
//   } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
//     middleNum = num2;
//   } else if (num2 <= num1 && num2 <= num3) {
//     lowestNum = num2;
//   }

//   if (num3 >= num1 && num3 >= num2) {
//     highestNum = num3;
//   } else if ((num3 < num1 && num3 > num2) || (num3 > num1 && num3 < num2)) {
//     middleNum = num3;
//   } else if (num3 <= num1 && num3 <= num2) {
//     lowestNum = num3;
//   }
//   console.log(highestNum);
//   console.log(middleNum);
//   console.log(lowestNum);
// }

function decend(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 < num3) {
      console.log(num1);
      console.log(num3);
      console.log(num2);
    } else {
      console.log(num1);
      console.log(num2);
      console.log(num3);
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2);
      console.log(num1);
      console.log(num3);
    } else {
      console.log(num2);
      console.log(num3);
      console.log(num1);
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      console.log(num3);
      console.log(num1);
      console.log(num2);
    } else {
      console.log(num3);
      console.log(num2);
      console.log(num1);
    }
  }
}
decend(3, 2, 2);
