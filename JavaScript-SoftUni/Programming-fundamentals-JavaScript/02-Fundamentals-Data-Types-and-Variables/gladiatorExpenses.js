function gladiator(lostFights, helmet, sword, shield, armor) {
  let helmetMoney = Math.trunc(lostFights / 2) * helmet;
  console.log(helmetMoney);
  let swordMoney = Math.trunc(lostFights / 3) * sword;
  console.log(swordMoney);
}

gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.5, 21.5, 40, 200);
