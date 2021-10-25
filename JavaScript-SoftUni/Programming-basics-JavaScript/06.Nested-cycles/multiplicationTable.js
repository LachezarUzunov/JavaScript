function multiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        for (let ii = 1; ii <= 10; ii++){
            console.log(`${i} * ${ii} = ${i*ii}`);
        }
    }
}
multiplicationTable([])