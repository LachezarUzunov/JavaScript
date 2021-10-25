function lowestNumber(input) {
    let index = 0;
    let command = input[index];

    let lowestNumber = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop") {
        command = Number(input[index]);
        index++
        if(command <= lowestNumber) {
            lowestNumber = command;
        }
        
        command = input[index];

    }

console.log(lowestNumber);

}

lowestNumber(["100",
"99",
"80",
"70",
"Stop"])
