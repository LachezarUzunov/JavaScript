function diagonalSums(matrix) {
  let mainDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i <= matrix.length - 1; i++) {
    let currentMain = Number(matrix[i][i]);
    mainDiagonal += currentMain;

    let currentSecond = Number(matrix[matrix.length - i - 1][i]);
    secondDiagonal += currentSecond;
  }
  console.log(mainDiagonal, secondDiagonal);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
