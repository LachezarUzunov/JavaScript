function string(word, sentence) {
  let stringAsArray = sentence.split(" ");
  let isFound = false;

  for (let wordy of stringAsArray) {
    if (wordy.toLowerCase() === word.toLowerCase()) {
      isFound = true;
      break;
    } else {
      isFound = false;
    }
  }
  if (isFound) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
string("javascript", "JavaScript is the best programming language");
