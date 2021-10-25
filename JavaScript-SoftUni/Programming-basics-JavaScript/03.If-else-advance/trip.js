function trip(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let moneySpent = 0;

  if (budget <= 100) {
    if (season === "summer") {
      moneySpent = budget * 0.3;
      console.log(`Somewhere in Bulgaria`);
      console.log(`Camp - ${(moneySpent).toFixed(2)}`);
    } else if (season === "winter") {
      moneySpent = budget * 0.7;
      console.log(`Somewhere in Bulgaria`);
      console.log(`Hotel - ${(moneySpent).toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    if (season === "summer") {
      moneySpent = budget * 0.4;
      console.log(`Somewhere in Balkans`);
      console.log(`Camp - ${(moneySpent).toFixed(2)}`);
    } else if (season === "winter") {
      moneySpent = budget * 0.8;
      console.log(`Somewhere in Balkans`);
      console.log(`Hotel - ${(moneySpent).toFixed(2)}`);
    }
  } else if (budget > 1000) {
    moneySpent = budget * 0.9;
    console.log(`Somewhere in Europe`);
    console.log(`Hotel - ${(moneySpent).toFixed(2)}`);
  }
}

trip(["50", "summer"]);
