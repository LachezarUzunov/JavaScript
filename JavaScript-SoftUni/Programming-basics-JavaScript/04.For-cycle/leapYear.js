function leapYear(input) {
    let leapYear = Number(input[0]);
    let endYear = Number(input[1]);

    for (let i = leapYear; i <= endYear; i += 4) {
        console.log(i);
    }

}

leapYear(["1908",
"1919"])
