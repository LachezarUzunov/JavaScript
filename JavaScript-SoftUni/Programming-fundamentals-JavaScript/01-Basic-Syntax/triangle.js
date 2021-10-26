function triangle(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    let currentNum = i;
    for (let j = 0; j < currentNum; j++) {
      string += ` ${currentNum}`;
    }
    console.log(string);
    string = "";
  }
}

triangle(3);
