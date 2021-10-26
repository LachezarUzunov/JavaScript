function reverseString(string) {
  //let string1 = string.join(" :) ");
  //console.log(string1);

  //let toString = string.toString();
  //console.log(toString);

  let asArray = string.split(" ");
  console.log(asArray);

  let asDividedString = asArray.join(" - ");
  console.log(asDividedString);

  //console.log(asArray);

  //for (let i = 0; i < asArray.length; i++) {
  //  asArray.push(i);
  // console.log(asArray);
  //}
}

reverseString("Hello");
//reverseString("SoftUni");
//reverseString("1234");
