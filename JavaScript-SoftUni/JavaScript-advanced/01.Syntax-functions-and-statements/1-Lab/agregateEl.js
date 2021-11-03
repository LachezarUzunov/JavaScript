function agregateEl(array) {
  let sum = 0;
  let sum2 = 0;
  let concat = "";
  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    sum2 += 1 / array[i];

    concat += array[i].toString();
  }
  console.log(`${sum}\n${sum2}\n${concat}`);
}

agregateEl([1, 2, 3]);
