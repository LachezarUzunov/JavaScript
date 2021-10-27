function maxNumber(list) {
  let newList = [];

  for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];
    let isTop = true;

    for (let j = i + 1; j < list.length + 1; j++) {
      if (list[j] >= currentNum) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      newList.push(currentNum);
    }
  }
  console.log(newList.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);
