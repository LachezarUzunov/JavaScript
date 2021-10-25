function invalidNumber(input) {
    let number = Number(input[0]);

    if ((number >= 100  && number <= 200) || number === 0) {
        number = "valid";
    } else {
        console.log("invalid");
    }

}

invalidNumber(["0"]);