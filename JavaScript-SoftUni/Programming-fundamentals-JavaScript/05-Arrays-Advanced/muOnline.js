function muOnline(array) {
  let initialHealth = 100;
  let initialBitcoins = 0;

  let roomsArray = array.toString().split("|");
  let isAlive = true;
  // think for 100 + heal!!!
  for (let i = 0; i < roomsArray.length; i++) {
    let tokens = roomsArray[i].split(" ");
    if (tokens[0] === "potion") {
      if (initialHealth + Number(tokens[1]) <= 100) {
        console.log(
          `You healed for ${Number(
            tokens[1]
          )} hp.\nCurrent health: ${(initialHealth += Number(tokens[1]))} hp.`
        );
      } else {
        console.log(
          `You healed for ${100 - initialHealth} hp.\nCurrent health: 100 hp.`
        );
        initialHealth = 100;
      }
    } else if (tokens[0] === "chest") {
      initialBitcoins += Number(tokens[1]);
      console.log(`You found ${Number(tokens[1])} bitcoins.`);
    } else {
      initialHealth -= Number(tokens[1]);
      if (initialHealth <= 0) {
        console.log(`You died! Killed by ${tokens[0]}.\nBest room: ${i + 1}`);
        isAlive = false;
        break;
      } else {
        console.log(`You slayed ${tokens[0]}.`);
      }
    }
  }

  if (isAlive) {
    console.log(
      `You've made it!\nBitcoins: ${initialBitcoins}\nHealth: ${initialHealth}`
    );
  }
}
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
