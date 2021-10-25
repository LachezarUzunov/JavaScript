function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let laundryMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneySaved = 0;
    let toysCount = 0;
    let money = 10;

    for(let i = 1; i <= lilysAge; i++) {
        if(i % 2 === 1) {
            toysCount++;
        } else {
            moneySaved += money;
            money += 10;
            moneySaved--
        }

    }

    moneySaved = moneySaved + (toysCount * toyPrice);
    
    if(moneySaved >= laundryMachinePrice) {
        console.log(`Yes! ${((moneySaved - laundryMachinePrice).toFixed(2))}`);
    } else {
        console.log(`No! ${((laundryMachinePrice - moneySaved).toFixed(2))}`);
    }

}

cleverLily(["10", "170", "6"])