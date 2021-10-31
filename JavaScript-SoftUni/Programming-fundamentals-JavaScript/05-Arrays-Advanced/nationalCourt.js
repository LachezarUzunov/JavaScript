function nationalCourt(array) {
  // find the efficiency of all 3 employees per hour
  let efficiency = Number(array[0]) + Number(array[1]) + Number(array[2]);
  let people = Number(array[3]);
  let hours = 0;

  while (people > 0) {
    hours++;
    if (hours % 4 === 0) {
      continue;
    } else {
      people -= efficiency;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

nationalCourt([1, 2, 3, 45]);
