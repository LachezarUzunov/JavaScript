function reveal(word, sentence) {
  let words = word.split(", ");

  for (let newWord of words) {
    sentence = sentence.replace("*".repeat(newWord.length), newWord);
  }
  console.log(sentence);
}
reveal(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
