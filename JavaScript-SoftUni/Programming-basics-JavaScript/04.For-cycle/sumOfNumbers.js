function sumOfNumbers(input) {
    let n = input[0];

    let text = n + "";
    let sum = 0;

    for (i = 0; i < text.length; i++){
        let n = Number(text[i]);
        sum += n;

    }

    console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers(["1234"]);