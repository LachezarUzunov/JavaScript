function sum(num) {
  let sun = 0;
  let numtoString = num.toString();
  for (let i = 0; i < numtoString.length; i++) {
    sun += Number(numtoString[i]);
  }
  console.log(sun);
}

sum(245678);
