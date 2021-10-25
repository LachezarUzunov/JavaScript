function fishersBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let moneyNeeded = 0;

    if (fishermen <= 6) {
        switch(season){
            case "Spring" : (moneyNeeded = 3000 * 0.90); break;
            case "Summer" : (moneyNeeded = 4200 * 0.90); break;
            case "Autumn" : (moneyNeeded = 4200 * 0.90); break;
            case "Winter" : (moneyNeeded = 2600 * 0.90); break;
        }
    } else if (fishermen <= 11) {
        switch(season) {
            case "Spring" : (moneyNeeded = 3000 * 0.85); break;
            case "Summer" : (moneyNeeded = 4200 * 0.85); break;
            case "Autumn" : (moneyNeeded = 4200 * 0.85); break;
            case "Winter" : (moneyNeeded = 2600 * 0.85); break;
        }
    } else if (fishermen >= 12) {
        switch(season) {
            case "Spring" : (moneyNeeded = 3000 * 0.75); break;
            case "Summer" : (moneyNeeded = 4200 * 0.75); break;
            case "Autumn" : (moneyNeeded = 4200 * 0.75); break;
            case "Winter" : (moneyNeeded = 2600 * 0.75); break;
        }
    }

    if (fishermen / 2 === 0) {
        if (season === "Spring" || season === "Summer" || season === "Winter") {
            moneyNeeded = moneyNeeded * 0.95;
        }
    } 

    if (budget >= moneyNeeded) {
        console.log(`Yes! You have ${(budget - moneyNeeded).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(moneyNeeded - budget).toFixed(2)} leva.`)
    }

}

fishersBoat(["2000",
"Winter",
"13"])


