function mergeLists(arrayOne, arrayTwo) {
  let newArray = [];

  for (let i = 0; i < arrayOne.length; i++) {
    if (i % 2 === 0) {
      newArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
    } else {
      newArray.push(arrayOne[i] + arrayTwo[i]);
    }
  }
  console.log(newArray.join(" - "));
}

mergeLists(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
