function stepeni(input) {
    let n = Number(input[0]);

    for (i = 0; i <= n; i += 2) {
        let result = Math.pow(2, i);
        console.log(result);
    }


}

stepeni(["7"])