function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    index = 2;
    let action = input[index];
    index2 = 3;
    let sum = Number(input[index2]);
    let moneyTakesCounter = 0;
    let daysCounter = 0;

    while(availableMoney < moneyNeeded) {
        if(action === "save") {
            availableMoney = availableMoney + sum;
            moneyTakesCounter = 0;
            daysCounter++;
        } else {
            availableMoney = availableMoney - sum;
            moneyTakesCounter++;
            daysCounter++;
        }
        if(moneyTakesCounter === 5) {
            break;
        }

        if(availableMoney < 0){
            availableMoney = 0;
        }
        index2 +=2;
        index +=2;
        action = input[index];
        sum = Number(input[index2]);
    }

    if(moneyTakesCounter < 5) {
        console.log(`You saved the money for ${daysCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${daysCounter}`);
    }
}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
 
