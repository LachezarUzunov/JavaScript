function reverseNums(num, array) {
  let newArray = [];
  for (let i = 0; i < num; i++) {
    newArray.push(array[i]);
  }

  let output = "";
  for (let j = newArray.length - 1; j >= 0; j--) {
    output += `${newArray[j]} `;
  }
  console.log(output);
}

reverseNums(3, [10, 20, 30, 40, 50]);
