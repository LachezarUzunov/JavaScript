function triangleOfNumbers(n) {
  result = "";
  newResult = "";
  for (let i = 1; i <= n; i++) {
    result = `${i} `;
    for (let j = 1; j <= i; j++) {
      newResult += `${result}`;
    }
    console.log(newResult);
    newResult = "";
  }
}

triangleOfNumbers(3);
