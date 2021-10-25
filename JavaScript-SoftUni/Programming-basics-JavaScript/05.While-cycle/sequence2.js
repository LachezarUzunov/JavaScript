function sequence2(input) {
    let n = Number(input[0]);

    let currentNumber = 1;

    while(currentNumber <= n) {
        console.log(currentNumber);

        currentNumber = currentNumber * 2 + 1;

    }


}

sequence2(["17"])