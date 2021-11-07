function smallestTwo(arr) {
  let newArr = [];
  let sorted = arr.sort((a, b) => a - b);
  newArr = sorted.slice(0, 2);
  console.log(newArr.join(" "));
}
smallestTwo([3, 0, 10, 4, 7, 3]);
