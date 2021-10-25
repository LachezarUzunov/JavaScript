function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    /* let income = 0;

        if (projectionType === "Premiere") {
            income = 12;
        } else if (projectionType === "Normal") {
            income = 7.50;
        } else if (projectionType === "Discount") {
            income = 5;
        }
    */

    if(projectionType === "Premiere") {
        console.log(`${(rows * columns * 12).toFixed(2)} leva`);
    } else if (projectionType === "Normal") {
        console.log(`${(rows * columns * 7.50).toFixed(2)} leva`);
    } else if (projectionType === "Discount") {
        console.log(`${(rows * columns * 5).toFixed(2)} leva`);
    } 

}

cinema(["Discount",
"12",
"30"])


