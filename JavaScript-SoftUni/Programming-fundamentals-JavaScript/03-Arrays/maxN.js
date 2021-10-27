function maxN(array) {
  let emptyArr = [];

  for (let i = 0; i < array.length; i++) {
    let currentN = array[i];
    let isTop = true;
    for (let j = i + 1; j < array.length; j++) {
      let newCurrent = array[j];
      if (newCurrent >= currentN) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      emptyArr.push(currentN);
    }
  }

  console.log(emptyArr.join(" "));
}

maxN([42, 45, 48]);
