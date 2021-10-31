function positive(array) {
  let newArray = [];

  for (let elements of array) {
    if (elements < 0) {
      newArray.unshift(elements);
    } else {
      newArray.push(elements);
    }
  }
  for (let elements of newArray) {
    console.log(elements);
  }
}

positive([7, -2, 8, 9]);
