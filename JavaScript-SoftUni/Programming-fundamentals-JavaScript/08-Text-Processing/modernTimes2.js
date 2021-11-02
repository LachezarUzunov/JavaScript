function modernTimes2(input) {
  let emptyArr = [];
  let inputAsArr = input.split(" ");
  for (let word of inputAsArr) {
    let isWord = true;
    if (word[0] === "#" && word.length > 1) {
      let letters = word.split("");
      for (letter of letters) {
        let n = letter.charCodeAt(0);
        if (n < 65 || n > 122 || (n >= 91 && n <= 96)) {
          isWord = false;
          break;
        }
      }
      if (isWord) {
        emptyArr.push(word.substring(1));
      }
    }
  }
  for (word of emptyArr) {
    console.log(word);
  }
}
modernTimes2("Nowadays everyone uses # to tag a #special word in #socialMedia");
