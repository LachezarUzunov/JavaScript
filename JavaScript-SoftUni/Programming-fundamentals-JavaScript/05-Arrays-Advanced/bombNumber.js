function bombNumber(sequence, bomb) {
  let specialNum = Number(bomb[0]);
  let numbersToDelete = Number(bomb[1]) * 2 + 1;
  let sum = 0;
  // find how many times specialNum contains

  while (sequence.includes(specialNum)) {
    sequence.splice(sequence.indexOf(specialNum) - bomb[1], numbersToDelete);
  }

  for (let element of sequence) {
    sum += element;
  }
  console.log(sum);
}

bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
