function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let numberOfSongs = Number(input.shift());
  let typeSong = input.pop();

  let songs = [];

  for (let elements of input) {
    let [typeList, name, time] = elements.split("_");

    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.typeList === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
