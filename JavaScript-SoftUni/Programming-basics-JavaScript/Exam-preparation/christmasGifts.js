function christmasGifts(input) {
    let index = 0;
    let kids = 0;
    let adults = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;
    let command = input[index];

    while (command !== "Christmas") {
        let age = Number(input[index]);
        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }
        index++;
        command = input[index]; 
    }

    moneyForToys = kids * 5;
    moneyForSweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])

