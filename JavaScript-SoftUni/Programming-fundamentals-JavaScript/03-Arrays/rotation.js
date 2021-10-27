function rotation(array, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let currentNum = array.shift();
    array.push(currentNum);
  }
  console.log(array.join(" "));
}

rotation([51, 47, 32, 61, 21], 2);
