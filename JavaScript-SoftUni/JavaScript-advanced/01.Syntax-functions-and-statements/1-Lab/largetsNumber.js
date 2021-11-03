function largestNumber(n1, n2, n3) {
  let largest = Number.MIN_SAFE_INTEGER;
  if (n1 > n2 && n1 > n3) {
    largest = n1;
  } else if (n2 > n1 && n2 > n3) {
    largest = n2;
  } else {
    largest = n3;
  }
  console.log(`The largest number is ${largest}.`);
}
largestNumber(5, -3, 16);
