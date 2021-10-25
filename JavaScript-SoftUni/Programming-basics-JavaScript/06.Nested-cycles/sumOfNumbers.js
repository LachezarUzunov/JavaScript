function sumOfNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let a = num1; a <= num2; a++){
        for (let b = num1; b <= num2; b++){
            counter++;
            if (a + b === magicNum){
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound){
            break;
        }
    }

    if (!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}

sumOfNumbers(["23",
"24",
"20"])

