function traveling(input){
    let index = 0;
    let command = input[index];
    let destination = input[index];
    index++;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneySaved = 0;
    

    while (command !== "End"){
        while (moneySaved < moneyNeeded) {
            let currentSave = Number(input[index]);
            moneySaved += currentSave;
            index++;
        } 
        console.log(`Going to ${destination}!`);
        moneySaved = 0;
        destination = input[index];
        command = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);
