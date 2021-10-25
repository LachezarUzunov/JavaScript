function worldRecord (input)    {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let timesOfSlowPerFifteenMeters = Math.floor(distance / 15);
    let finalDelay = timesOfSlowPerFifteenMeters * 12.5;

    let ivanTime = distance * timeForMeter;
    let finalTime = ivanTime + finalDelay;

    if (finalTime >= record) {
        console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`)

    } else {
        
        console.log(`Yes, he succeeded! The new world record is ${(finalTime).toFixed(2)} seconds.`)
    }


}

worldRecord(["55555.67",
"3017",
"5.03"])

