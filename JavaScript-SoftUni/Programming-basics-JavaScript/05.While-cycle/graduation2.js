function graduation2(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;

    let excludedCounter = 0;
    let averageGrade = 0;
    let isExcluded = false;

    while(grade <= 12) {
        let yearGrade = input[index];
        index++;
        
        if(yearGrade >= 4.00) {
            grade++;
            averageGrade += yearGrade;
            continue;
        } else {
            excludedCounter++;
        }

        if(excludedCounter = 1) {
            console.log(`${name} has been excluded at ${grade} grade`);
            isExcluded = true;
            break;
        }
    }

    if(!isExcluded) {
    averageGrade = averageGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    
    }
}

graduation2(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
