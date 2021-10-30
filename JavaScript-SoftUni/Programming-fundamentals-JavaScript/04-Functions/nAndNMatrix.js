function matrix(number) {
  let firstMatrix = "";
  let endMatrix = "";

  for (let i = 1; i <= number; i++) {
    firstMatrix += `${number} `;
  }

  for (let i = 1; i <= number; i++) {
    endMatrix += `\n${firstMatrix}`;
  }
  return endMatrix;
}

let result = matrix(3);
console.log(result);

// SOFTUNI SOLUTION

function nXnMatrix(number) {
  for (let i = 0; i < number; i++) {
    let row = "";
    for (let j = 0; j < number; j++) {
      row += `${number} `;
    }
    console.log(row);
  }
}

nXnMatrix(3);
