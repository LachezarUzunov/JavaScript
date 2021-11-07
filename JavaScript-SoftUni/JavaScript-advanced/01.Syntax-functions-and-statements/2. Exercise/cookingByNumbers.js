function cookingByNumbers(numAsString, op1, op2, op3, op4, op5) {
  let num = Number(numAsString);

  let arr = [op1, op2, op3, op4, op5];

  for (let op of arr) {
    switch (op) {
      case "chop":
        num = num / 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num++;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num *= 0.8;
        console.log(num);
        break;
    }
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("-------------");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
