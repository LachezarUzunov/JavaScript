function repeatString(string, num) {
  let newString = "";
  for (i = 0; i < num; i++) {
    newString += string;
  }
  console.log(newString);
}

repeatString("abc", 3);
