function scolarship(input)  {
    let income = Number(input[0]);
    let grades = Number(input[1]);
    let minimalWage = Number(input[2]);

    let isSocialScolarship = false;
    let isGredesScolarship = false;
    let scolarshipForGrades = 0;
    let scolarshipForWage = 0;

    if (income < minimalWage) {
        isSocialScolarship = true;
    }

    if (grades < 4.50) {
        isSocialScolarship = false;
    }

    if (isSocialScolarship) {
        isGredesScolarship = true;
        scolarshipForWage = minimalWage * 0.35;
    }

    if (grades >= 5.50) {
        isGredesScolarship = true;
        scolarshipForGrades = grades * 25;
    }

    if(!isSocialScolarship) {
        console.log("You cannot get a scholarship!");
    } else if (scolarshipForGrades >= scolarshipForWage) {
        console.log(`You get a scholarship for excellent results ${Math.floor(scolarshipForGrades)} BGN`);
    } else {
        console.log(`You get a Social scholarship ${Math.floor(scolarshipForWage)} BGN`);
    }

}

scolarship(["300.00", "5.65", "420.00"]);
