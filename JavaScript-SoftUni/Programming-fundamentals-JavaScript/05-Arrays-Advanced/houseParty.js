function houseParty(array) {
  for (let list of array) {
    let miniArray = list.split(" ");
    if (miniArray.length === 4) {
      console.log(`${miniArray[0]} is not in the list!`);
      console.log(`${miniArray[0]}`);
      break;
    }
  }
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
