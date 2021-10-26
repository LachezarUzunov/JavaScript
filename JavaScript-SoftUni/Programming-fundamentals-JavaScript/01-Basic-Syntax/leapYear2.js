function leapYear2(num) {
  if (num % 400 === 0) {
    console.log("yes");
  } else if (num % 100 === 0) {
    console.log("no");
  } else if (num % 4 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

leapYear2(1984);
