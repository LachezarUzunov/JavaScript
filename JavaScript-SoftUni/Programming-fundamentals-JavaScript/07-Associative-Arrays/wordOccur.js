function wordOccur(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    let currentWord = list[i];
    let count = 1;

    for (let j = i + 1; j < list.length; j++) {
      let newCurrent = list[j];

      if (currentWord === newCurrent) {
        count++;
      }
    }
    if (!obj.hasOwnProperty(currentWord)) {
      obj[currentWord] = count;
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let pair of sorted) {
    console.log(`${pair[0]} -> ${pair[1]} times`);
  }
}

wordOccur([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
