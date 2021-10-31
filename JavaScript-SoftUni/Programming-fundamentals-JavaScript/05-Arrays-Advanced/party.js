function party(list) {
  let emptyList = [];
  let first = list[0].split(" ");
  let name = first[0];

  for (let elements = 0; elements < list.length; elements++) {
    let tokens = list[elements].split(" ");
    let currentName = tokens[0];
    if (tokens.length === 3) {
      if (elements === 0) {
        emptyList.push(currentName);
      } else if (name === currentName) {
        console.log(`${name} is already in the list!`);
      } else {
        emptyList.push(currentName);
      }
    }
    if (tokens.length === 4) {
      if (emptyList.includes(currentName)) {
        let index = emptyList.indexOf(currentName);
        emptyList.splice(index, 1);
      } else {
        console.log(`${currentName} is not in the list!`);
      }
    }
  }
  console.log(emptyList.join("\n"));
}

party([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);

function solve(input) {
  let list = [];

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i].split(" ");
    let guest = currentLine[0];
    let action = currentLine[2];

    if (action !== "not") {
      if (!list.includes(guest)) {
        list.push(guest);
      } else if (list.includes(guest)) {
        console.log(`${guest} is already in the list!`);
      }
    } else if (action === "not") {
      if (list.includes(guest)) {
        list.splice(1, 1);
      } else if (!list.includes(guest)) {
        console.log(`${guest} is not in the list!`);
      }
    }
  }
  console.log(list.join("\n"));
}

function party(arr) {
  let guestList = [];
  for (string of arr) {
    let str = string.split(" ");
    if (!str.includes("not")) {
      if (guestList.includes(str[0])) {
        console.log(`${str[0]} is already in the list!`);
      } else {
        guestList.push(str[0]);
      }
    } else if (str.includes("not")) {
      if (guestList.includes(str[0])) {
        guestList.pop(str[0]);
      } else if (!guestList.includes(str[0])) {
        console.log(`${str[0]} is not in the list!`);
      }
    }
  }
  console.log(guestList.join("\n"));
}
