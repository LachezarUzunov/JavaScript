function arrayRotation(list, rotations) {
  // 1st element goes at the last element with the number of rotations given
  // 1st step remove 1st element and move other elements step to left
  // 2nd - add 1st element as last

  for (let i = 0; i < rotations; i++) {
    let currentNum = list[0];

    for (j = 1; j < list.length; j++) {
      let newCurrent = list[j];
      list[j - 1] = newCurrent;
    }

    list[list.length - 1] = currentNum;
  }
  console.log(list.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
