function stringLength(str1, str2, str3) {
  const sum = str1.length + str2.length + str3.length;
  const average = Math.floor(sum / 3);
  console.log(`${sum}\n${average}`);
}

stringLength("chocolate", "ice cream", "cake");
