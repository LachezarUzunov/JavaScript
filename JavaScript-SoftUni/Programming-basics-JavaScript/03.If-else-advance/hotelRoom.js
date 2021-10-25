function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let appartmentPrice = 0;
    let studioPrice = 0;

    if (nights <= 7) {
        if (month === "May" || month === "October") {
            studioPrice = nights * 50;
            appartmentPrice = nights * 65;
        } else if (month === "June" || month === "September") {
            studioPrice = nights * 75.20;
            appartmentPrice = nights * 68.70;
        } else if (month === "July" || month === "August") {
            studioPrice = nights * 76;
            appartmentPrice = nights * 77;
        }
       
    } else if (nights <= 14) {
        if (month === "May" || month === "October") {
            studioPrice = nights * 50 * 0.95;
            appartmentPrice = nights * 65;
        } else if (month === "June" || month === "September") {
            studioPrice = nights * 75.20;
            appartmentPrice = nights * 68.70;
        } else if (month === "July" || month === "August") {
            studioPrice = nights * 76;
            appartmentPrice = nights * 77;
        }
       
    } else if (nights > 14) {
        if (month === "May" || month === "October") {
            studioPrice = nights * 50 * 0.70;
            appartmentPrice = nights * 65  * 0.90;
        } else if (month === "June" || month === "September") {
            studioPrice = nights * 75.20 * 0.80;
            appartmentPrice = nights * 68.70 * 0.90;
        } else {
            studioPrice = nights * 76;
            appartmentPrice = nights * 77 * 0.90;
        }
        
    }

    console.log(`Apartment: ${(appartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);

}

hotelRoom(["August",
"20"])



