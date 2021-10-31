function sorting3(list) {
  let empty = [];
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length / 2; i++) {
    empty.push(list[list.length - i - 1]);
    empty.push(list[i]);
    if (empty.length > list.length) {
      empty.pop();
    }
  }
  console.log(empty.join(" "));
}

sorting3([1, 21, 3]);
