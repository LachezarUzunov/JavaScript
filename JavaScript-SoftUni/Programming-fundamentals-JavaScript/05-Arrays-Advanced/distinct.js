function distinct(array) {
  let emptyArr = [];

  for (let element of array) {
    if (emptyArr.includes(element)) {
      continue;
    } else {
      emptyArr.push(element);
    }
  }
  console.log(emptyArr.join(" "));
}

distinct([7, 9, 7, 2, 1, 2]);
