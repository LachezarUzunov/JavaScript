function coffeeMachine(input) {
    let warmDring = input[0];
    let sugar = input[1];
    let drinksCount = input[2];
    let endPrice = 0;
    

    if(warmDring === "Espresso") {
        switch (sugar) {
            case "Without" : endPrice = 0.9 * 0.65 * drinksCount; break;
            case "Normal" : endPrice = 1 * drinksCount; break;
            case "Extra" : endPrice = 1.2 * drinksCount; break;
        }
    } else if (warmDring === "Cappuccino") {
        switch (sugar) {
            case "Without" : endPrice = 1 * 0.65 * drinksCount; break;
            case "Normal" : endPrice = 1.2 * drinksCount; break;
            case "Extra" : endPrice = 1.6 * drinksCount; break;
        }
    } else if (warmDring === "Tea") {
        switch (sugar) {
            case "Without" : endPrice = 0.5 * 0.65 * drinksCount; break;
            case "Normal" : endPrice = 0.6 * drinksCount; break;
            case "Extra" : endPrice = 0.7 * drinksCount; break;
        }
    }

    if (warmDring === "Espresso" && drinksCount >= 5) {
        endPrice = endPrice * 0.75;
    }

    if (endPrice > 15) {
        endPrice = endPrice * 0.8;
    }

console.log(`You bought ${drinksCount} cups of ${warmDring} for ${endPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Cappuccino", "Normal", "13"]);
