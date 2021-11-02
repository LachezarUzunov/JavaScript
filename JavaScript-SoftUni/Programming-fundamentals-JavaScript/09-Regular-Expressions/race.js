function race(input) {
  let participants = input.shift().split(", ");
  let obj = {};
  let namePattern = /[A-Za-z]/g;
  let digitsPattern = /\d/g;

  for (let man of participants) {
    obj[man] = 0;
  }

  while (input[0] != "end of race") {
    let current = input.shift();
    let name = current.match(namePattern).join("");
    let digits = current
      .match(digitsPattern)
      .map(Number)
      .reduce((x, y) => x + y);

    if (obj.hasOwnProperty(name)) {
      obj[name] += digits;
    }
  }

  let sorted = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
