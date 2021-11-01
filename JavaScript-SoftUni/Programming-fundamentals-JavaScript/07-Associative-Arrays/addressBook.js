function addressBook(addBook) {
  let book = {};

  for (let elements of addBook) {
    let tokens = elements.split(":");

    let name = tokens[0];
    let address = tokens[1];

    book[name] = address;
  }
  let sortedArray = Object.entries(book);

  sortedArray.sort((a, b) => a[0].localeCompare(b[0]));

  for (let elements of sortedArray) {
    console.log(`${elements[0]} -> ${elements[1]}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
