// function bonusScorring(input) {
//   let studentsCount = Number(input.shift());
//   let lectureCount = Number(input.shift());
//   let additionalBonus = Number(input.shift());
//   let studentAttendances = input.map((i) => Number(i));
//   // console.log(studentAttendances);
//   let array = [];
//   for (let i = 0; i < studentAttendances.length; i++) {
//     let totalBonus =
//       (studentAttendances[i] / lectureCount) * (5 + additionalBonus);

//     array.push(totalBonus);
//   }

//   let maxBonus = Math.max(...array);

//   let bestStudent = array.indexOf(maxBonus);

//   console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
//   console.log(
//     `The student has attended ${studentAttendances[bestStudent]} lectures.`
//   );
// }

function bonusScorring(input) {
  let studentsCount = Number(input.shift());
  let lectureCount = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let studentAttendances = input.map((i) => Number(i));
  // console.log(studentAttendances)
  let array = [];
  for (let i = 0; i < studentAttendances.length; i++) {
    let totalBonus =
      (studentAttendances[i] / lectureCount) * (5 + additionalBonus);
    array.push(totalBonus);
  }

  let maxBonus = Math.max(...array);
  let bestStudent = array.indexOf(maxBonus);

  if (array.length > 0) {
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(
      `The student has attended ${studentAttendances[bestStudent]} lectures.`
    );
  } else {
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
  }
}

bonusScorring([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
