function charactersInRange(char1, char2) {
  let min = char1.charCodeAt(0);
  let max = char2.charCodeAt(0);

  let char1AsNum = char1.charCodeAt(0);
  let char2AsNum = char2.charCodeAt(0);

  if (char2AsNum < char1AsNum) {
    min = char2.charCodeAt(0);
    max = char1.charCodeAt(0);
  }

  let result = " ";
  for (let i = min + 1; i < max; i++) {
    let character = String.fromCharCode(i);
    result += character + " ";
    let result = " ";
    result += `${a}\n`;
    result += `${b}\n`;
    return result;
  }
  return result;
}

let result = charactersInRange("C", "#");
console.log(result);
