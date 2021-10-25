function goldMine(input) {
    let index = 0;
    let locations = Number(input[index]);
    index++;
    

    for(let i = 0; i < locations; i++) {
        let expectedAveragePerDay = Number(input[index]);
        index++;
        
        let days = Number(input[index]);
        index++;
        
        let sumAveragePerday = 0;

        for(let j = 0; j < days; j++) {
            let currentGold = Number(input[index]);
            index++;
            sumAveragePerday += currentGold;
        }
        if ((sumAveragePerday / days) >= expectedAveragePerDay) {
            console.log(`Good job! Average gold per day: ${(sumAveragePerday / days).toFixed(2)}.`);
        } 
        
        if ((sumAveragePerday / days) < expectedAveragePerDay) { 
            console.log(`You need ${(expectedAveragePerDay - sumAveragePerday / days).toFixed(2)} gold.`)
        }
    } 
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);

