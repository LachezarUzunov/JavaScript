function maxSequence(list) {
  // find sequence of numbers, compare if elements next to each other are equal
  // break if not
  // count how many are the matches
  // find the longest sequence!!!

  let counter = 0;
  let newArray = [];

  // two cycles; 1st going through the whole array
  for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];
    let currentCount = 1;
    let sequence = [];

    // second going from the index we are on to the end of the array
    for (let j = i + 1; list.length; j++) {
      let matchNum = list[j];

      if (matchNum === currentNum) {
        currentCount++;
        sequence.push(matchNum);
      } else {
        break;
      }
    }
    if (currentCount > counter) {
      counter = currentCount;
      newArray.push(sequence);
    }
    // console.log(sequence.join(" "));
  }
  console.log(newArray.join(" "));
  // print the left one
  //console.log(counter);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
