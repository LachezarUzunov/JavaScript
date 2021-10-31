function sortByTwo(list) {
  let sort = list.sort((a, b) => {
    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);

    return firstCriteria || secondCriteria;
  });
  console.log(sort.join("\n"));
}
sortByTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
