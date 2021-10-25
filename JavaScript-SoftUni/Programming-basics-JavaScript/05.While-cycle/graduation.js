function graduation(input) {
    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);
    let counter = 1;
    let sum = 0;
    let excludedCounter = 0;

    while(counter <= 12) {
        grade = Number(input[index]);
        
        if (grade < 4) {
            excludedCounter++;
            if (excludedCounter === 2) {
            console.log(`${name} has been excluded at ${counter} grade`);
            break;
            }
        } else {
            sum +=grade;
            index++;
            counter++;
        } 
        
    }
    
    if(excludedCounter !== 2) {
    console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
