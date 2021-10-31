function sortAnArrayBy(array) {
  array.sort((a, b) => {
    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);

    return firstCriteria || secondCriteria;
  });

  console.log(array.join("\n"));
}

sortAnArrayBy(["alpha", "beta", "gamma"]);

// shorter

function sortBy(array) {
  array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(array.join("\n"));
}

sortBy(["alpha", "beta", "gamma"]);
