function carWash(commands) {
  let percentClean = 0;

  for (command of commands) {
    switch (command) {
      case "soap":
        percentClean += 10;
        break;
      case "water":
        percentClean += 20;
        break;
      case "vacuum cleaner":
        percentClean += 25;
        break;
      case "mud":
        percentClean -= 10;
        break;
    }
  }
  console.log(percentClean);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
