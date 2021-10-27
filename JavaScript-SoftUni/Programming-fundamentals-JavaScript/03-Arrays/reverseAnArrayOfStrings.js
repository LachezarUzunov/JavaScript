function reverseAnArrayOfStrings(array) {
  console.log(array.reverse().join(" "));
  let newArray = [];
  for (let elements of array) {
    newArray.unshift(elements);
  }
  console.log(newArray.join(" "));
}

reverseAnArrayOfStrings(["abc", "def", "hig", "klm", "nop"]);
