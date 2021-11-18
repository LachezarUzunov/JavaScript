function sortingNums(array) {
  array.sort((a, b) => a - b);
  let empty = [];
  for (let i = 0; i < array.length / 2; i++) {
    empty.push(array[i]);
    if (empty.length == array.length) {
      break;
    } else {
      empty.push(array[array.length - i - 1]);
    }
  }
  return empty;
}
sortingNums([1, 65, 3, 52, 48]);
