function mergeArrays(list1, list2) {
  let thirdList = [];

  for (let i = 0; i < list1.length; i++) {
    if (i % 2 === 0) {
      thirdList.push(Number(list1[i]) + Number(list2[i]));
    } else {
      thirdList.push(list1[i] + list2[i]);
    }
  }

  console.log(thirdList.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
