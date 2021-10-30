function passValidator(password) {
  let isValid = true;
  let digitsCount = 0;
  let containsOnlyDigitsAndLetters = true;
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }
  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];
    let numAtAscii = currentChar.charCodeAt(0);

    if (numAtAscii > 47 && numAtAscii < 58) {
      digitsCount++;
    }

    if (
      numAtAscii < 48 ||
      (numAtAscii > 57 && numAtAscii < 65) ||
      (numAtAscii > 90 && numAtAscii < 97) ||
      numAtAscii > 122
    ) {
      isValid = false;
      containsOnlyDigitsAndLetters = false;
    }
  }

  if (!containsOnlyDigitsAndLetters) {
    console.log("Password must consist only of letters and digits");
  }

  if (digitsCount < 2) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

//passValidator("login");
//passValidator("MyPass123");
passValidator("Pa$123s$s");

// SOFTUNI SOLUTION
/*
function passValidator(password) {
  function isLengthBetweenSixAndTen(string) {
    if (string.length >= 6 && string.length <= 10) {
      return true;
    } else {
      return false;
    }
  }

  function consistsOnlyOfLettersAndDigits(string) {
    for (let char of string) {
      let charCode = char.charCodeAt(0);

      if (
        !(charCode >= 48 && charCode < 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      )
        return false;
    }
    return true;
  }

  function hasAtLeastTwoDigits(string) {
    let counter = 0;

    for (char of string) {
      let charCode = char.charCodeAt(0);

      if (charCode >= 48 && charCode <= 57) {
        counter++;
      }
    }
    return counter >= 2;
    // if (counter >= 2) {
    //     return true;
    // } else {
    //     return false;
    // }
  }

  let isLengthValid = isLengthBetweenSixAndTen(password);
  let containsDigitsAndLetters = consistsOnlyOfLettersAndDigits(password);
  let containsAtLeastTwoDigits = hasAtLeastTwoDigits(password);

  if (isLengthValid && containsDigitsAndLetters && containsAtLeastTwoDigits) {
    console.log("Password is valid");
    return;
  }

  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!containsDigitsAndLetters) {
    console.log("Password must consist only of letters and digits");
  }

  if (!containsAtLeastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}

passValidator("login");
passValidator("MyPass123");
passValidator("Pa$s$s"); */
