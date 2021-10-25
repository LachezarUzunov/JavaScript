function pastryShop(input) {
    let pastry = input[0];
    let ordersCount = Number(input[1]);
    let day = Number(input[2]);

    let price = 0;

    if (day <= 15) {
        switch (pastry) {
            case "Cake" : price = ordersCount * 24 * 0.90; break;
            case "Souffle" : price = ordersCount * 6.66 * 0.90; break;
            case "Baklava" : price = ordersCount * 12.60 * 0.90; break;
        }
    } else {
        switch (pastry) {
            case "Cake" : price = ordersCount * 28.70; break;
            case "Souffle" : price = ordersCount * 9.80; break;
            case "Baklava" : price = ordersCount * 16.98; break;
        }
    }

    if(day <= 22) {
        if (price < 100) {
            console.log(price.toFixed(2));
        } else if (price <= 200) {
            console.log((price * 0.85).toFixed(2));
        } else {
            console.log((price * 0.75).toFixed(2));
        }
    } else {
        console.log(price.toFixed(2));
    }
}
pastryShop(["Cake",
"5",
"12"])


