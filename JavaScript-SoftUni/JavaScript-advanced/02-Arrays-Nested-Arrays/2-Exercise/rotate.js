function rotate(array, steps) {
  for (let i = 0; i < steps; i++) {
    last = array.pop();
    array.unshift(last);
  }
  console.log(array.join(" "));
}
rotate(["1", "2", "3", "4"], 2);
