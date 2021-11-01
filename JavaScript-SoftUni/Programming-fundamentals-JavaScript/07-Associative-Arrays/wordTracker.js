function wordTracker(list) {
  let obj = {};
  let words = list.shift().split(" ");

  for (let word of words) {
    obj[word] = 0;
  }

  for (let word of list) {
    if (Object.keys(obj).includes(word)) {
      obj[word] += 1;
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let element of sorted) {
    console.log(`${element[0]} - ${element[1]}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
