function movie3(list) {
  //
  let movieArr = [];
  for (let element of list) {
    let tokens = element.split(" ");
    let commands = tokens[0];
    if (commands === "addMovie") {
      console.log(...tokens);
    }
  }
}

movie3([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
