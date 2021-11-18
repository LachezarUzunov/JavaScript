function addAndRemove(array) {
  let endArray = [];
  let num = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "add") {
      endArray.push(num);
    } else {
      endArray.pop();
    }
    num++;
  }

  if (endArray.length == 0) {
    console.log("Empty");
  } else {
    console.log(endArray.join("\n"));
  }
}
addAndRemove(["remove", "remove", "remove"]);
