function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let half = Math.floor(sorted.length / 2);
  let sliced = sorted.slice(half);
  return sliced;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
