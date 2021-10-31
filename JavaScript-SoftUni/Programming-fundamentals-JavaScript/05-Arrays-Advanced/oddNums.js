function oddNums(array) {
  let emptyArray = [];
  for (let i = 1; i < array.length; i += 2) {
    emptyArray.push(array[i] * 2);
  }
  emptyArray.reverse();
  console.log(emptyArray.join(" "));
}

oddNums([3, 0, 10, 4, 7, 3]);
