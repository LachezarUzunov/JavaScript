function pascalCase(string) {
  let lower = string.toLocaleLowerCase();
  let result = [];
  let currentWord = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] != lower[i]) {
      if (currentWord.length > 0) {
        result.push(currentWord);
      }
      currentWord = string[i];
    } else {
      currentWord += string[i];
    }
  }
  if (currentWord.length > 0) {
    result.push(currentWord);
  }
  console.log(result.join(", "));
}

pascalCase("HoldTheDoor");
