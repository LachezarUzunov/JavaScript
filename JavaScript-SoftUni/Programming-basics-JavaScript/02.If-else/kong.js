function kong(input) {
    let budget = Number(input[0]);
    let crew = Number(input[1]);
    let priceDress = Number(input[2]);
    
    let decor = Number(budget * 0.10);

    let priceForAll = crew * priceDress;

    if (crew > 150) {
        priceForAll = priceForAll * 0.90;
    }
    
    let totalExpense = priceForAll + decor;

    if (totalExpense > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalExpense - budget).toFixed(2)} leva more.`);

    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalExpense).toFixed(2)} leva left.`);
    }
}


    kong(["9587.88", "222", "55.68"])
    
    
