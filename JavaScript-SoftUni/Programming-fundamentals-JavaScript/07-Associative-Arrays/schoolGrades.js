// function schoolGrades(gradesSchool) {
//   let students = {};
//   for (let elements of gradesSchool) {
//     let tokens = elements.split(" ");
//     let name = tokens[0];

//     let grades = tokens.splice(1, tokens.length).map(Number);
//     // let gradesSum = 0;
//     // for (let elements of grades) {
//     //   gradesSum += elements;
//     // }
//     // let average = gradesSum / grades.length;

//     if (!students.hasOwnProperty(name)) {
//       students[name] = [];
//     }

//     let existing = students[name];
//     for (let grade of grades) {
//       existing.push(grade);
//     }
//   }
//   let sorted = Object.entries(students);
//   console.log(sorted);

//   function compareAverage((a, b)) {

//   }
// }

function solve(input) {
  let map = new Map();
  for (let string of input) {
    let tokens = string.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);
    if (!map.has(name)) {
      map.set(name, []);
    }
    let existing = map.get(name);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
  let sorted = Array.from(map).sort(compareAverage);

  console.log(sorted);

  function compareAverage(a, b) {
    // Calculate first average
    let avgA = 0;
    a[1].forEach((x) => (avgA += x));
    avgA /= a[1].length;
    // Calculate second average
    let avgB = 0;
    b[1].forEach((x) => (avgB += x));
    avgB /= b[1].length;
    // Comparison
    return avgA - avgB;
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
