function trainTheTrainers(input) {
    let n = Number(input[0]);
    let index = 1;
    let command = input[index];
    let allGradesCount = 0;
    let allGradesSum = 0;

    while(command !== "Finish"){
        let presentation = input[index];
        let gradesSum = 0;
        index++;
        for (let i = 1; i <= n; i++) {
            let currentGrade = Number(input[index]);
            index++;
            gradesSum += currentGrade;
            allGradesSum += currentGrade;
            allGradesCount++;
        }
        console.log(`${presentation} - ${(gradesSum/n).toFixed(2)}.`);
        command = input[index];
    }
    console.log(`Student's final assessment is ${(allGradesSum / allGradesCount).toFixed(2)}.`);
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
