function books(input)  {
    let pagesInBook = Number(input[0]);
    let pagesInHour = Number(input[1]);
    let daysToRead = Number(input[2]);
    let hoursaDay = (pagesInBook / pagesInHour) / daysToRead;

    console.log(hoursaDay);

}

books(["212", "20", "2"]);

