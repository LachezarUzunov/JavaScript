function catWalks(input) {
    let mins = Number(input[0]);
    let numberOfWalks = Number(input[1]);
    let caloriesIncome = Number(input[2]);

    let caloriesBurntPerWalks = mins * 5;

    if((caloriesBurntPerWalks * numberOfWalks) >= caloriesIncome * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurntPerWalks * numberOfWalks}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurntPerWalks * numberOfWalks}.`)
    }
}

catWalks(["40", "2", "300"]);

