function walking(input) {
    let target = 10000;
    index = 0;
    let actualSteps = Number(input[index]);
    let combinedSteps = 0;
    let command = input[index];
    let stepsAfterCommand = Number(input[index]);

    while(command !== "Going home") {
        actualSteps = Number(input[index]);
        combinedSteps += actualSteps;

        if(combinedSteps >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${combinedSteps - target} steps over the goal!`);
        }
        index++;
        command = input[index];
    }

    index++;
    stepsAfterCommand = Number(input[index]);
    combinedSteps += stepsAfterCommand;

    if(combinedSteps >=target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${combinedSteps - target} steps over the goal!`);
    } else {
        console.log(`${target - combinedSteps} more steps to reach goal.`);
    }

}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])

