function demo(para1, para2) {
  let parameter1 = Number(para1);
  console.log(parameter1);
  let parameter2 = Number(para2);
  let digitsCount = 0;
  if (typeof parameter2 === Number) {
    digitsCount++;
  }
  console.log(parameter2);
  console.log(digitsCount);
}

demo("demo", 5);
