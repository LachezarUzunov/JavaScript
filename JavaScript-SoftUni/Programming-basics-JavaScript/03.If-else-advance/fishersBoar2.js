function fishersBoat2(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let moneyNeeded = 0;

    if (fishermen <= 6) {
        if (season === "Spring") {
            moneyNeeded = 3000 * 0.90;
        } else if (season === "Summer" || season === "Autumn") {
            moneyNeeded = 4200 * 0.90;
        } else if (season === "Winter") {
            moneyNeeded = 2600 * 0.90;
        }
    } else if (fishermen <= 11) {
        if (season === "Spring") {
            moneyNeeded = 3000 * 0.85;
        } else if (season === "Summer" || season === "Autumn") {
            moneyNeeded = 4200 * 0.85;
        } else if (season === "Winter") {
            moneyNeeded = 2600 * 0.85;
        }

    } else if (fishermen >= 12) {
        if (season === "Spring") {
            moneyNeeded = 3000 * 0.75;
        } else if (season === "Summer" || season === "Autumn") {
            moneyNeeded = 4200 * 0.75;
        } else if (season === "Winter") {
            moneyNeeded = 2600 * 0.75;
        }

    }

    if ((fishermen % 2 === 0) && season !== "Autumn") {
        moneyNeeded = moneyNeeded * 0.95;
    }

    if (budget >= moneyNeeded) {
        console.log(`Yes! You have ${(budget - moneyNeeded).toFixed(2)} leva left.`);
    } else if (moneyNeeded > budget) {
        console.log(`Not enough money! You need ${(moneyNeeded - budget).toFixed(2)} leva.`)
    }
        

}

fishersBoat2(["2000",
"Winter",
"13"])


