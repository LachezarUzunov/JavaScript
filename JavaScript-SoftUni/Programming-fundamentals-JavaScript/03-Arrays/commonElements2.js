function commonElements2(arrayOne, arrayTwo) {
  for (let element of arrayOne) {
    let currentElement = element;
    for (let element of arrayTwo) {
      if (currentElement === element) {
        console.log(element);
      }
    }
  }
}

commonElements2(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
