function salary(input) {
    let numberOfOpenTabs = Number(input[0]);
    let salary = Number(input[1]);
    let inputL = input.length

    let facebookCounter = 0;
    let instagramCounter = 0;
    let reditCounter = 0;

    for (i = 2; i <= inputL; i++) {

        let currentTab = input[i];

        if (currentTab === "Facebook") {
            facebookCounter++;
        } 
        
        if (currentTab === "Instagram") {
            instagramCounter++;
        } 
        
        if (currentTab === "Reddit") {
            reditCounter++;
        }

    }

    salary = salary - (facebookCounter * 150 + instagramCounter * 100 + reditCounter * 50);

    if (salary <= 0) {
        console.log(`You have lost your salary.`);

    } else {
        console.log(Math.floor(salary));
    }

}

salary(["1",
"1500",
"Facebook"]);
