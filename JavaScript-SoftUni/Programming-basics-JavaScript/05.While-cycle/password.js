function password(input) {
    let username = input[0];
    let password = input[1];
    let passTry = input[2];
    let index = 3;

    while(passTry !== password) {
        passTry = input[index];
        index++;
    }

    console.log(`Welcome ${username}`);

}

password(["Gosho",
"secret",
"secret"])

