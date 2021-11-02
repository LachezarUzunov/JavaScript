function countString(sentence, word) {
  let count = 0;
  let words = sentence.split(" ");

  for (let wordy of words) {
    if (wordy === word) {
      count++;
    }
  }
  console.log(count);
}
countString("This is a word and it also is a sentence", "is");
