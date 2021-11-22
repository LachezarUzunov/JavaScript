function townPop(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let [town, population] = array[i].split(" <-> ");
    population = Number(population);

    if (obj.hasOwnProperty(town)) {
      obj[town] += population;
    } else {
      obj[town] = population;
    }
  }

  for (let town in obj) {
    console.log(`${town} : ${obj[town]}`);
  }
}

townPop([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
