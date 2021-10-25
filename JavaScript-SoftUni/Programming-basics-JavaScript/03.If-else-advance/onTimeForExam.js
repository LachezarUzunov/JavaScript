function onTimeForExam(input) {
    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourOfArival = Number(input[2]);
    let minuteOfArival = Number(input[3]); 

    if(hourOfArival === hourOfExam) {
        if (minuteOfArival <= minutesOfExam) {
            if(minutesOfExam - minuteOfArival <= 30) {
                console.log(`On time`)
                console.log(`${minutesOfExam - minuteOfArival} minutes before the start`);
            }
        } else {
            console.log(`Late`);
            console.log(`${minuteOfArival - minutesOfExam} minutes after the start`)
        }
    } else if (hourOfExam - hourOfArival === 1) {
        if (minutesOfExam === 0) {
            if (minuteOfArival >= 30) {
                console.log(`On time`);
                console.log(`${minuteOfArival - 30} minutes before the start`);
            } else {
                console.log(`Early`);
                console.log(`${60 - minuteOfArival} minutes before the start`);
            }
        }
        if (minutesOfExam > 0) {
            
        }
    }
}

onTimeForExam(["9",
"30",
"9",
"50"])


