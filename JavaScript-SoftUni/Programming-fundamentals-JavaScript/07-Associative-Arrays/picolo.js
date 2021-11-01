function piccollo(list) {
  //
  let parkingLot = [];

  for (let cars of list) {
    let tokens = cars.split(", ");
    let command = tokens[0];
    let car = tokens[1];

    if (command === "IN") {
      if (!parkingLot.includes(car)) {
        parkingLot.push(car);
      }
    } else {
      if (parkingLot.includes(car))
        parkingLot.splice(parkingLot.indexOf(car), 1);
    }
  }

  let sorted = parkingLot.sort((a, b) => a.localeCompare(b));
  if (sorted.length < 1) {
    console.log(`Parking Lot is Empty`);
  } else {
    console.log(sorted.join("\n"));
  }
}
piccollo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
