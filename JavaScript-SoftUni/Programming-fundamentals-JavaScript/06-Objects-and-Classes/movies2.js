function movies2(movies) {
  let moviesList = [];
  for (let command of movies) {
    let tokens = command.split("addMovie ");

    if (tokens[0] === "") {
      let movie = tokens[1];
      let obj = {
        name: movie,
        director: " ",
        date: " ",
      };
      moviesList.push(obj);
    }
  }

  for (let command of movies) {
    let tokens = command.split(" directedBy ");
    if (tokens.length === 2) {
      let film = tokens[0];
      let director = tokens[1];

      for (let movie of moviesList) {
        if (movie.name === film) {
          movie.director = director;
        }
      }
    }
  }

  for (let command of movies) {
    let tokens = command.split(" onDate ");
    if (tokens.length === 2) {
      let film = tokens[0];
      let date = tokens[1];
      for (let movie of moviesList) {
        if (movie.name === film) {
          movie.date = date;
        }
      }
    }
  }
  for (let movies of moviesList) {
    console.log(JSON.stringify(movies));
  }
}

movies2([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
