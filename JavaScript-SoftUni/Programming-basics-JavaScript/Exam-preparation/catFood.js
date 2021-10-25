function catFood(input) {
    let numberOfCats = Number(input[0]);
    let index = 1;
    let foodPerCat = Number(input[index]);

    let smallCats = 0;
    let bigCats = 0;
    let hugeCats = 0;
    let allFoodEaten = 0;

    for(let i = 0; i < numberOfCats; i++) {
        allFoodEaten += foodPerCat;
        if (foodPerCat >= 100 && foodPerCat < 200){
            smallCats++;
        } else if (foodPerCat < 300) {
            bigCats++;
        } else if (foodPerCat <= 400) {
            hugeCats++;
        }
        index++;
        foodPerCat = Number(input[index]);
    }

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${hugeCats} cats.`);
    console.log(`Price for food per day: ${(allFoodEaten / 1000 * 12.45).toFixed(2)} lv.`)
}

catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])
