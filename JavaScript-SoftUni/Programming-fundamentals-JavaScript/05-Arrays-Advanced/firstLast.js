function firstLast(array) {
  let num = array.shift();
  let first = array.slice(0, num);
  let second = array.slice(array.length - num);
  console.log(first.join(" "));
  console.log(second.join(" "));
}

firstLast([3, 6, 7, 8, 9]);
