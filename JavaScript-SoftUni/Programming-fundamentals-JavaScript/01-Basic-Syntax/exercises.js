// 01. AGES
/* function ages(n) {
  if (n < 0) {
    console.log("out of bounds");
  } else if (n <= 2) {
    console.log("baby");
  } else if (n <= 13) {
    console.log("child");
  } else if (n <= 19) {
    console.log("teenager");
  } else if (n <= 65) {
    console.log("adult");
  } else {
    console.log("elder");
  }
}
ages(67);  */

// 02. ROUNDING
function rounding(num, decimal) {
  if (decimal > 15) {
    decimal = 15;
  }
  console.log(parseFloat(num.toFixed(decimal)));
}

rounding(10.5, 3);
