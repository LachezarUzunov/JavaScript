function invent(params) {
  //
  let obj = {};
  let heroes = [];
  for (let heros of params) {
    let tokens = heros.split(" / ");
    let hero = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(", ");

    obj = {
      Hero: hero,
      level: level,
      items: items,
    };
    heroes.push(obj);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let element of heroes) {
    console.log(
      `Hero: ${element.Hero}\nlevel => ${
        element.level
      }\nitems => ${element.items
        .sort((a, b) => a.localeCompare(b))
        .join(", ")}`
    );
  }
}

invent([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
