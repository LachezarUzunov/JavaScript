function liter(input)   {
    let length = Number(input[0]);
    let size = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let obem = length * size * height * 0.001;
    let water = obem * (1 - percent/100);

    console.log(water);

}

liter(["85", "75", "47", "17"]);