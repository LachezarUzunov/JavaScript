function biggestNumber(input) {
    let index = 0
    let command = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;
    
    while(command !== "Stop") {
        command = Number(input[index]);
        index++
        if(command >= maxNumber) {
            maxNumber = command;
        }
        command = input[index];

    }

console.log(maxNumber);

}

biggestNumber(["100",
"99",
"80",
"70",
"Stop"])
