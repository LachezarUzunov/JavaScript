function heroicInventory(array) {
  let result = [];
  for (let el of array) {
    let obj = {};
    let [name, level, items] = el.split(" / ");
    items = items ? items.split(", ") : [];
    level = Number(level);
    obj.name = name;
    obj.level = level;
    obj.items = items;
    result.push(obj);
  }
  let asJson = JSON.stringify(result);
  console.log(asJson);
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
