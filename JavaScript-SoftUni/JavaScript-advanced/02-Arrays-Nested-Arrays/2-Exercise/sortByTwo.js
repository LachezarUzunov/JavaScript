function sortByTwo(array) {
  let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(sorted.join("\n"));
}
sortByTwo(["alpha", "beta", "gamma", "sigma", "betta", "alfa"]);
