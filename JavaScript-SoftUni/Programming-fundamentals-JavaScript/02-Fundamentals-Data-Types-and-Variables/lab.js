// 01. DELIMITER
/* function delimiter(name1, name2, delimit) {
  console.log(`${name1}${delimit}${name2}`);
}
delimiter("John", "Smith", "->"); */

// 02. RIGHT PLACE
/* function rightPlace(string1, char, string2) {
  let string1AsArray = string1.split("");
  let newString = "";

  for (let i = 0; i < string1AsArray.length; i++) {
    let currentChar = string1AsArray[i];
    if (currentChar === "_") {
      currentChar = char;
    }
    newString += currentChar;
  }
  if (newString === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
// let replaced = string1.replace('_', char);
// let output = replaced === string2 ? 'Matched' : 'Not matched';

rightPlace("Str_ng", "i", "String"); */

// 03. INTEGER AND FLOAT
/* function intOrFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

intOrFloat(9, 100, 1.1); */

// 04. AMAZING NUMBERS
/* function amazingNumbers(num) {
  let numAsString = num.toString();
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }

  let sumAsString = sum.toString();
  let hasNine = false;
  for (let j = 0; j < sumAsString.length; j++) {
    if (sumAsString[j] == "9") {
      hasNine = true;
      break;
    }
  }
  console.log(`${num} Amazing? ${hasNine ? "True" : "False"}`);

  sum.toString().includes('9'); - this will check if the string contains 9
}

amazingNumbers(1233);
amazingNumbers(999); */

// 05. GRAMOPHONE
/* function gramophone(band, album, song) {
  let duration = (album.length * band.length * song.length) / 2;
  let rotations = 0;
  while (duration > 0) {
    rotations++;
    duration -= 2.5;
  }
  console.log(`The plate was rotated ${rotations} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs"); */

// 06. FUEL MONEY
/* function fuelMoney(distance, passengers, price) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += (distance / 100) * passengers * 0.1;
  console.log(
    `Needed money for that trip is ${(neededFuel * price).toFixed(2)}lv.`
  );
}

fuelMoney(260, 9, 2.49); */

// 07. Centuries to Minutes
/* function centuries(century) {
  let years = century * 100;
  let days = Math.floor(365.2422 * years);
  let hours = days * 24;
  let minutes = hours * 60;
  console.log(
    `${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

centuries(1);
centuries(5); */

// 08. SPECIAL NUMBERS
/* function specialNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let currentNum = i.toString();
    for (let j = 0; j < currentNum.length; j++) {
      sum += Number(currentNum[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${currentNum} -> True`);
    } else {
      console.log(`${currentNum} -> False`);
    }
    sum = 0;
  }
}

specialNumbers(15); */

// 09. TRIPLES OF LATIN LETTERS
function latinLetters(num) {}
