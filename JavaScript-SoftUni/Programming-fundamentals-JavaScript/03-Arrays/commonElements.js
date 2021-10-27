function commonElements(list1, list2) {
  // find if there is commond element and print it
  // compare elements of 1st array with elements of second
  for (let i = 0; i < list1.length; i++) {
    let currentElement = list1[i];

    for (j = 0; j < list2.length; j++) {
      let secondElement = list2[j];

      if (currentElement === secondElement) {
        console.log(currentElement);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
