function login(list) {
  let user = list.shift(); // this one takes the 1st parameter
  // of the array and deletes it.
  //   let passAsList = user.split(""); // this will split the
  //   //username into a new array consisted of each character of the username
  //   let passAsReversed = passAsList.reverse(); // this will reverse
  //   // the parameters in the array;
  //   let password = passAsReversed.join(""); // this will combine
  //   // the different parameters in the array into 1 string

  let counter = 1;

  let pass = list.shift().split("").reverse().join("");

  while (true) {
    let enteredPassword = list.shift();

    if (counter === 4) {
      console.log(`User ${user} blocked!`);
      break;
    }

    if (enteredPassword === pass) {
      console.log(`User ${user} logged in.`);
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
    counter++;
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
// login(["momo", "omom"]);
// login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
