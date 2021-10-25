function sumNumbers(input) {
    let n = Number(input[0]);
    let index = 1;
    let currentNumber = 0;
    let sum = 0;

    while(sum < n) {
        currentNumber = Number(input[index]);
        sum += currentNumber;
        index++
    }

console.log(sum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"])


