function stringSubstring(word, text) {
  // split text into tokens
  let tokens = text.split(" ");

  for (let token of tokens) {
    // for each token
    // if token equal word (case-incensitive) -> print and end
    if (word.toLocaleLowerCase() == token.toLocaleLowerCase()) {
      return console.log(word);
    }
  }

  console.log(`${word} not found`);
  // otherwise print failure
}

stringSubstring("javascript", "JavaScript is the best programming language");
