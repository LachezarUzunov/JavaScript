function blagotvoritelnost(input)   {
    let days = Number(input[0]);
    let cooks = Number(input[1]);
    let priceTorta = 45;
    let priceGofret = 5.80;
    let pricePancake = 3.20;
    let cakes = Number(input[2]) * priceTorta;
    let gofret = Number(input[3]) * priceGofret;
    let pancakes = Number(input[4]) * pricePancake;
    

    let winnings = days * cooks * (cakes + gofret + pancakes);
    let money = winnings - winnings/8;

    console.log(money);
}

blagotvoritelnost(["23", "8", "14", "30","16"])
