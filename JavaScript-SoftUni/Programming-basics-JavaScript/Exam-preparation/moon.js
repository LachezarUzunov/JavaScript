function moon(input) {
    let averageSpeed = Number(input[0]);
    let gasolineNeededFor100Km = Number(input[1]);
    let distance = 384400 * 2;
    let hoursNeeded = (distance / averageSpeed.toFixed(2)) + 3;
    let gasolineNeeded = (gasolineNeededFor100Km * distance) / 100;
    
console.log(Math.ceil(hoursNeeded));
console.log(gasolineNeeded);
}

moon(["10000",
"5"]);
