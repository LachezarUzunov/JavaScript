function negativePositive(array) {
  let newArr = [];

  for (let el of array) {
    if (el < 0) {
      newArr.unshift(el);
    } else {
      newArr.push(el);
    }
  }
  console.log(newArr.join("\n"));
}

negativePositive([7, -2, 8, 9]);
