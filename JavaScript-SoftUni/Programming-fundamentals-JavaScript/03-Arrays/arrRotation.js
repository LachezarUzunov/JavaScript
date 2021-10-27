function arrRotation(array, num) {
  for (let i = 0; i < num; i++) {
    let removed = array.shift();
    array.push(removed);
  }
  console.log(array.join(" "));
}

arrRotation([51, 47, 32, 61, 21], 2);
