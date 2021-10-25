function newHouse(input) {
    let flowersKind = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let priceForAllFlowers = 0;

    if (flowersKind === "Roses") {
        if (flowersCount <= 80) {
            priceForAllFlowers = flowersCount * 5;
        } else if (flowersCount > 80) {
            priceForAllFlowers = flowersCount * 5 * 0.90;
        }
    } else if (flowersKind === "Dahlias") {
        if (flowersCount <= 90) {
            priceForAllFlowers = flowersCount * 3.80;
        } else if (flowersCount > 90) {
            priceForAllFlowers = flowersCount * 3.80 * 0.85;
        }
    } else if (flowersKind === "Tulips") {
        if (flowersCount <= 80) {
            priceForAllFlowers = flowersCount * 2.80;
        } else if (flowersCount > 80) {
            priceForAllFlowers = flowersCount * 2.80 * 0.85;
        }
    } else if (flowersKind === "Narcissus") {
        if (flowersCount < 120) {
            priceForAllFlowers = flowersCount * 3 * 1.15;
        } else {
            priceForAllFlowers = flowersCount * 3;
        }
    } else if (flowersKind === "Gladiolus") {
        if (flowersCount < 80) {
            priceForAllFlowers = flowersCount * 2.50 * 1.20;
        } else {
            priceForAllFlowers = flowersCount * 2.50;
        }
    }

    
if  (priceForAllFlowers > budget) {
    console.log(`Not enough money, you need ${(priceForAllFlowers - budget).toFixed(2)} leva more.`);
} else {
    console.log(`Hey, you have a great garden with ${flowersCount} ${flowersKind} and ${(budget - priceForAllFlowers).toFixed(2)} leva left.`);
}


}

newHouse(["Tulips",
"68",
"260"])

