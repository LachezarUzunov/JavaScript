function simpleDigits(input) {
    index = 0;
    let command = input[index];
    let primeNums = 0;
    let nonPrimeNums = 0;
    

    while (command !== "stop") {
        let number = Number(input[index]);
        if(number < 0) {
            console.log(`Number is negative.`);
        } else {
            let isPrime = true;
            for (let i = 2; i < number; i++) { 
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime){
                primeNums += number;
            } else {
                nonPrimeNums += number;
            }
        }
        index++;
        command = input[index]; 
    }
console.log(`Sum of all prime numbers is: ${primeNums}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeNums}`);
}

simpleDigits(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);
