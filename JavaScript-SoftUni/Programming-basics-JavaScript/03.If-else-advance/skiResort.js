function skiResort(input) {
    daysToStay = Number(input[0] - 1);
    roomType = input[1];
    review = input[2];

    let endSum = 0;

    if (roomType === "room for one person") {
        endSum = daysToStay * 18;
    } else if (roomType === "apartment" && daysToStay <= 9) {
        endSum = daysToStay * 25 * 0.70;
    } else if (roomType === "apartment" && daysToStay >=10 && daysToStay <= 15) {
        endSum = daysToStay * 25 * 0.65;
    } else if (roomType === "apartment" && daysToStay > 15) {
        endSum = daysToStay * 25 * 0.50;
    } else if (roomType === "presidet apartment" && daysToStay <= 9) {
        endSum = daysToStay * 35 * 0.90;
    } else if (roomType === "president apartment" && daysToStay >= 10 && daysToStay <= 15) {
        endSum = daysToStay * 35 * 0.85;
    } else if (roomType === "president apartment" && daysToStay > 15) {
        endSum = daysToStay * 35 * 0.80;
    }

    if (review === "positive") {
        console.log((endSum * 1.25).toFixed(2));
    } else if (review === "negative") {
        console.log((endSum * 0.90).toFixed(2));
    }

}

skiResort(["14",
"apartment",
"positive"])
