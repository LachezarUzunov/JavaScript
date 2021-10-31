function arrayManipultions(array) {
  //let newArray = array.shift();
  //let arrayAsString = newArray.toString();
  //let splittedNumbers = arrayAsString.split(" ");
  //console.log(splittedNumbers);
  let newArray = array.shift().split(" ").map(Number);
  //let arrayAsNums = splittedNumbers.map(Number);
  //console.log(arrayAsNums);

  for (let i = 0; i < array.length; i++) {
    let [command, firstNum, secondNum] = array[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        newArray.push(firstNum);
        break;
      case "Remove":
        newArray.splice(newArray.indexOf(firstNum), 1);
        break;
      case "RemoveAt":
        newArray.splice(firstNum, 1);
        break;
      case "Insert":
        newArray.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(newArray.join(" "));
}

arrayManipultions([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
