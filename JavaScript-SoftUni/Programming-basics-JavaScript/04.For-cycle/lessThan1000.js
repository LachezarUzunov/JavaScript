function lessThan1000(input) {
    let num = Number(input[0]);

    for(let i = 0; i < 1000; i++) {
        if(i % 10 === 7) {
            console.log(i);
        }
    }

}

lessThan1000("");