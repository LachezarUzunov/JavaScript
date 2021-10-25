function spaceShip(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let averageHeight = Number(input[3]);

    let spaceShipSize = w * l * h;
    let spaceRoom = (averageHeight + 0.40) * 2 * 2;
    let austronautsCount = Math.floor(spaceShipSize / spaceRoom);

    if(austronautsCount < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (austronautsCount <= 10) {
        console.log(`The spacecraft holds ${austronautsCount} astronauts.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}

spaceShip(["3.5",
"4",
"5",
"1.70"]);