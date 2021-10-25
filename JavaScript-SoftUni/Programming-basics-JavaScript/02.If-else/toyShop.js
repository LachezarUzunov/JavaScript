function toyShop(input) {
    let moneyNeeded = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let soldCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let winnings = (puzzleCount * puzzlePrice + dollsCount * dollsPrice + bearsCount * bearsPrice +
    minionsCount * minionsPrice + trucksCount * trucksPrice) * 0.90;

    if(soldCount >= 50) {
        winnings = winnings * 0.75;
    } 
    
    if(winnings >= moneyNeeded) {
        let diff = winnings - moneyNeeded;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)

    }   else {
        let diff = Math.abs(winnings - moneyNeeded);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)

    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);