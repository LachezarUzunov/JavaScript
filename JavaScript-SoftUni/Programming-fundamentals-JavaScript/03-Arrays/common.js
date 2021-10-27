function commonElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let currentEl = array1[i];
    for (let j = 0; j < array2.length; j++) {
      if (currentEl === array2[j]) {
        console.log(currentEl);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
