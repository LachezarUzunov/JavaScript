function addAndSubstract(array) {
  let newArray = [];
  let sumOldArray = 0;
  let sumNewArray = 0;

  for (let element of array) {
    sumOldArray += element;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumNewArray += array[i] + i;
      newArray.push(array[i] + i);
    } else {
      sumNewArray += array[i] - i;
      newArray.push(array[i] - i);
    }
  }
  console.log(newArray);
  console.log(`${sumOldArray}\n${sumNewArray}`);
}

addAndSubstract([5, 15, 23, 56, 35]);
