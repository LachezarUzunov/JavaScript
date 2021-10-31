function shoppingList(array) {
  let list = array.shift().split("!");

  for (let toDo of array) {
    let commands = toDo.split(" ");

    if (commands[0] === "Urgent") {
      if (list.includes(commands[1])) {
        continue;
      } else {
        list.unshift(commands[1]);
      }
    } else if (commands[0] === "Unnecessary") {
      if (list.includes(commands[1])) {
        list.splice(list.indexOf(commands[1]), 1);
      }
    } else if (commands[0] === "Correct") {
      if (list.includes(commands[1])) {
        list.splice(list.indexOf(commands[1]), 1, commands[2]);
      }
    } else if (commands[0] === "Rearrange") {
      if (list.includes(commands[1])) {
        list.splice(list.indexOf(commands[1]), 1);
        list.push(commands[1]);
      }
    } else if (commands[0] === "Go") {
      console.log(list.join(", "));
      break;
    }
  }
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Urgent Milk",
  "Rearrange Tomatoes",
  "Go Shopping!",
]);
