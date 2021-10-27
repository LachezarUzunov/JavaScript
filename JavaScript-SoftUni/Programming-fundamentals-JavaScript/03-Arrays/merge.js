function merge(array1, array2) {
  let third = [];
  for (let i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
      third.push(Number(array1[i]) + Number(array2[i]));
    } else {
      third.push(array1[i] + array2[i]);
    }
  }
  console.log(third.join(" - "));
}

merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
