function grades(list) {
  let obj = {};
  for (let element of list) {
    let tokens = element.split(" ");
    let person = tokens.shift();
    let grades = tokens.map(Number);

    if (obj.hasOwnProperty(person)) {
      for (let grade of grades) {
        obj[person].push(grade);
      }
    } else {
      obj[person] = grades;
    }
  }
  let sorted = Object.entries(obj).sort((a, b) => average(a, b));

  function average(a, b) {
    let aSum = 0;
    for (let i = 0; i < a[1].length; i++) {
      aSum += a[1][i];
    }
    let bSum = 0;
    for (let i = 0; i < b[1].length; i++) {
      bSum += b[1][i];
    }

    let aAverage = aSum / a[1].length;
    let bAverage = bSum / b[1].length;
    return aAverage - bAverage;
  }
  for (let el of sorted) {
    console.log(`${el[0]}: ${el[1].join(", ")}`);
  }
}

grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
