function printSum(start, end) {
  let array = [];
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
    array.push(i);
  }

  console.log(array.join(" "));
  console.log(`Sum: ${sum}`);
}

printSum(5, 10);
