function chat(input) {
  let array = [];

  for (let message of input) {
    let command = message.split(" ");

    if (command[0] === "Chat") {
      array.push(command[1]);
    } else if (command[0] === "Delete") {
      if (array.includes(command[1])) {
        array.splice(array.indexOf(command[1]), 1);
      }
    } else if (command[0] === "Edit") {
      if (array.includes(command[1])) {
        array.splice(array.indexOf(command[1]), 1, command[2]);
      }
    } else if (command[0] === "Pin") {
      if (array.includes(command[1])) {
        for (let element of array) {
          if (element === command[1]) {
            array.push(element);
            break;
          }
        }
      }
      array.splice(array.indexOf(command[1]), 1);
    } else if (command[0] === "Spam") {
      let sliced = command.slice(1);
      array.push(...sliced);
    } else if (command[0] === "end") {
      console.log(array.join("\n"));
      break;
    }
  }
}

chat([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
