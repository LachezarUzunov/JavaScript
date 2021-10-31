function manipulations(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapaciry = Number(array.shift());
  for (let elements of array) {
    let tokens = elements.split(" ");
    if (tokens[0] === "Add") {
      wagons.push(tokens[1]);
    } else {
      for (let i = 0; i < wagons.length; i++) {
        let numToAdd = Number(tokens[0]);
        let currentNum = Number(wagons[i]);
        if (currentNum + numToAdd <= maxCapaciry) {
          wagons[i] = numToAdd + currentNum;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

manipulations([
  "32 54 21 12 4 0 23",
  "75",
  "Add 10",
  "Add 0",
  "30",
  "10",
  "75",
]);
