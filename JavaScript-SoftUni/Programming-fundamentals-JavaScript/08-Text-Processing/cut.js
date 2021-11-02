function cut(input) {
  //
  let left = input.substring(0, input.length / 2);
  let right = input.substring(input.length / 2);

  let reversedLeft = left.split("").reverse().join("");
  let reversedRight = right.split("").reverse().join("");
  console.log(reversedLeft);
  console.log(reversedRight);
}
cut("tlucifh");
