function examPreparation(input) {
   let index = 0;
   let badGradesLimit = Number(input[index]);
   index++;
   let command = input[index];
   let badGradesCounter = 0;
   let gradesSum = 0;
   let gradesCounter = 0;
   let currentTask = "";
   


   while (command !== "Enough"){
       currentTask = input[index];
       index++;
       let currentGrade = Number(input[index]);
       index++;
       gradesCounter++;
       gradesSum += currentGrade;
        if(currentGrade <= 4){ 
            badGradesCounter++;
        }
        if (badGradesCounter === badGradesLimit){
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }
        command = input[index];
   }
   if (badGradesCounter < badGradesLimit) { 
   console.log(`Average score: ${(gradesSum / gradesCounter).toFixed(2)}`);
   console.log(`Number of problems: ${gradesCounter}`);
   console.log(`Last problem: ${currentTask}`)
   }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
