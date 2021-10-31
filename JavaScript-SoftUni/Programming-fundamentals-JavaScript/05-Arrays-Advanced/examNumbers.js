function numbers(input) {
  let array = input.shift().split(" ").map(Number);

  for (let command of input) {
    let tokens = command.split(" ");

    if (tokens[0] === "Add") {
      array.push(Number(tokens[1]));
    } else if (tokens[0] === "Remove") {
      if (array.includes(Number(tokens[1]))) {
        array.splice(array.indexOf(Number(tokens[1])), 1);
      }
    } else if (tokens[0] === "Replace") {
      if (array.includes(Number(tokens[1]))) {
        array.splice(array.indexOf(Number(tokens[1])), 1, Number(tokens[2]));
      }
    } else if (tokens[0] === "Collapse") {
      array = array.filter((x) => x >= Number(tokens[1]));
    } else if (tokens[0] === "Finish") {
      console.log(array.join(" "));
      break;
    }
  }
}

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
