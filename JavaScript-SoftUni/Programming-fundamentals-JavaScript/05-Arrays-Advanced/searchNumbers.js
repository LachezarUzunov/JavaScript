function searchNumbers(array1, array2) {
  array1.splice(array2[0]);

  for (let i = 0; i < array2[1]; i++) {
    array1.shift();
  }
  let count = 0;

  for (let element of array1) {
    if (element === array2[2]) {
      count++;
    }
  }

  console.log(`Number ${array2[2]} occurs ${count} times.`);
}

searchNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);
