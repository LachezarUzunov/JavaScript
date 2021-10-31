function songs2(input) {
  let listOfSongs = [];

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let numberOfSongs = input.shift();
  let typeAll = input.pop();

  for (let song of input) {
    let [typeList, name, time] = song.split("_");
    if (typeList === typeAll || typeAll === "all") {
      listOfSongs.push(new Song(typeList, name, time));
    }
  }
  for (let list of listOfSongs) {
    console.log(list.name);
  }
}

songs2([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
