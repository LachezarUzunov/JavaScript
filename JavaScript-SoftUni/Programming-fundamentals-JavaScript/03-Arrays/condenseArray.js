function condenseArray(array) {
  let condensed = [];
  condensed.length = array.length - 1;

  if (array.length <= 1) {
    console.log(array.join());
  } else {
    while (array.length > 1) {
      for (let i = 0; i < array.length - 1; i++) {
        condensed[i] = array[i] + array[i + 1];
      }
      condensed.length = array.length - 1;
      array = condensed;
    }
  }

  console.log(condensed.join());
}

condenseArray([5, 0, 4, 1, 2]);
