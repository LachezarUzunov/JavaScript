function perfectNumber(number) {
  let result = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  if (result === number) {
    console.log("We have a perfect number!");
  } else {
    console.log(`It's not so perfect.`);
  }
}

perfectNumber(6);
perfectNumber(1236498);

// SOFTUNI SOLUTION

function perferNum(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    console.log(sum);
    console.log("We have a perfect number!");
  } else {
    console.log(`It's not so perfect.`);
  }
}

perfectNumber(6);
