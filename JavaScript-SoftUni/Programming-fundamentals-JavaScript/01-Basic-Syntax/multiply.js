/* function multiply(num) {
  let result = num * 2;
  console.log(result);
}

multiply(2); */

/*function exellent(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

exellent(5);*/

/*function solve() {
  for (num = 1; num <= 5; num++) {
    console.log(num);
  }
}
solve();*/

// Numbers from N to 1;
/*function nums(num) {
  while (num >= 1) {
    console.log(num);
    num--;
  }
}

nums(5);*/

// 05. Numbers from M to N
/*function mToN(m, n) {
  while (m >= n) {
    console.log(m);
    m--;
  }
}
mToN(10, 6);*/

// 06. STUDENT INFORMATION
/*function student(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

student("Lacho", 32, 5.55); */

// 07.Month Printer
/* function month(num) {
  if (num < 1 || num > 12) {
    console.log("Error!");
  } else {
    switch (num) {
      case 1:
        console.log("January");
        break;
      case 2:
        console.log("February");
        break;
      case 3:
        console.log("March");
        break;
      case 4:
        console.log("April");
        break;
      case 5:
        console.log("May");
        break;
      case 6:
        console.log("June");
        break;
      case 7:
        console.log("July");
        break;
      case 8:
        console.log("August");
        break;
      case 9:
        console.log("September");
        break;
      case 10:
        console.log("October");
        break;
      case 11:
        console.log("November");
        break;
      case 12:
        console.log("December");
        break;
    }
  }
}
month(14); */

// 08. Foreign Languages
/* function foreignLang(country) {
  switch (country) {
    case "England":
    case "USA":
      console.log("English");
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}
foreignLang("Bulgaria"); */

// 09. THEATER PROMOTIONS
/* function theater(day, age) {
  if (day === "Weekday") {
    if (age < 0) {
      console.log("Error!");
    } else if (age > 122) {
      console.log("Error!");
    } else if (age <= 18) {
      console.log("12$");
    } else if (age <= 64) {
      console.log("18$");
    } else if (age <= 122) {
      console.log("12$");
    }
  } else if (day === "Weekend") {
    if (age < 0) {
      console.log("Error!");
    } else if (age > 122) {
      console.log("Error!");
    } else if (age <= 18) {
      console.log("15$");
    } else if (age <= 64) {
      console.log("20$");
    } else if (age <= 122) {
      console.log("15$");
    }
  } else if (day === "Holiday") {
    if (age < 0) {
      console.log("Error!");
    } else if (age > 122) {
      console.log("Error!");
    } else if (age <= 18) {
      console.log("5$");
    } else if (age <= 64) {
      console.log("12$");
    } else if (age <= 122) {
      console.log("12$");
    }
  }
}

theater("Holiday", 15); */

// 10. Divisible by 3
/* function divisibleByThree() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

divisibleByThree(); */

// 11. SUM OF ODD NUMBERS
function sumOfOddNumbers(n) {
  let oddNumbers = 0;
  let num = 1;
  let sum = 0;
  while (oddNumbers < n) {
    console.log(num);
    sum += num;
    num += 2;
    oddNumbers += 1;
  }
  num++;
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
