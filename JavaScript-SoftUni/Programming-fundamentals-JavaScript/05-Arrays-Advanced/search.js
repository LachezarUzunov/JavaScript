function search(input, commands) {
  let numsToTake = commands[0];
  let deleteNums = commands[1];
  let searchNum = commands[2];
  let count = 0;

  let sliced = input.slice(0, numsToTake);

  sliced.splice(0, deleteNums);

  for (let elements of sliced) {
    if (elements === searchNum) {
      count++;
    }
  }

  console.log(`Number ${searchNum} occurs ${count} times.`);
}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
