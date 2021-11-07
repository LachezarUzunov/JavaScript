function lastKNums(leng, elementsToSum) {
  let sum = 0;
  let arr = [1];

  for (let i = 0; i < leng - 1; i++) {
    let sliced = arr.slice(-elementsToSum);
    for (el of sliced) {
      sum += el;
    }
    arr.push(sum);
    sum = 0;
  }
  return arr;
}
console.log(lastKNums(22, 2));
