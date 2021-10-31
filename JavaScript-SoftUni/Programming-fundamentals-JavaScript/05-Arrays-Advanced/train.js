function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());
  //   console.log(maxCapacity, typeof maxCapacity);
  //   console.log(wagons);
  for (let commands of array) {
    let miniArray = commands.split(" ");

    if (miniArray[0] === "Add") {
      wagons.push(Number(miniArray[1]));
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + Number(miniArray[0]) <= maxCapacity) {
          wagons[i] += Number(miniArray[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
