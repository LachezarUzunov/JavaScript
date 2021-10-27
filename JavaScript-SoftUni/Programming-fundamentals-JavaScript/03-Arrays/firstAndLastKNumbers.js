function firstAndLastK(array) {
  let numbersToCut = array.shift();

  let leftArray = array.slice(0, numbersToCut);
  let rightArray = array.slice(array.length - numbersToCut);

  console.log(`${leftArray.join(" ")}\n${rightArray.join(" ")}`);
}

firstAndLastK([3, 6, 7, 8, 9]);
