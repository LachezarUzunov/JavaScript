// function revealWords(words, text) {
//   text = ` ${text} `;
//   // parse target words
//   words = words.split(", ");

//   // for each word
//   for (let word of words) {
//     // find asterisks line with matching lenght and replace it
//     let match = ` ${"*".repeat(word.length)} `;
//     word = ` ${word} `;

//     text = text.replace(match, word);
//   }
//   console.log(text.trim());
// }

function revealWords(words, text) {
  words = words.split(", ");
  let textArray = text.split(" ");
  let result = [];

  for (let token of textArray) {
    let replaced = false;
    for (let word of words) {
      if (token == "*".repeat(word.length)) {
        result.push(word);
        replaced = true;
      }
    }
    if (replaced == false) {
      result.push(token);
    }
  }
  console.log(result.join(" "));
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
