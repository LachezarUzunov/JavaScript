function bonusScoring(array) {
  let lecturesCount = Number(array[1]);
  let additionalBonus = Number(array[2]);

  let attendancies = array.slice(3);

  let bonuses = [];
  for (let element of attendancies) {
    currentBonus = Math.ceil((element / lecturesCount) * (5 + additionalBonus));
    bonuses.push(currentBonus);
  }
  let highest = bonuses.sort((a, b) => b - a).shift();
  if (bonuses.length > 0) {
    console.log(
      `Max Bonus: ${highest}.\nThe student has attended ${attendancies
        .sort((a, b) => b - a)
        .shift()} lectures.`
    );
  } else {
    console.log(`Max Bonus: 0.\nThe student has attended 0 lectures.`);
  }
}

bonusScoring([10, 30, 14, 8, 23, 27, 28, 15, 17, 25, 26, 5, 18]);
