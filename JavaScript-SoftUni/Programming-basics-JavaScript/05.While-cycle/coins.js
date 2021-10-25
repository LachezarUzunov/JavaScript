function coins(input) {
  
    let sents = Number(input[0])*100;
    let coins = 0;

    while(sents !== 0) {
        if(sents - 200 >= 0) {
            coins++;
            sents -= 200;
        } else if (sents - 100 >= 0) {
            coins++;
            sents -= 100;
        } else if (sents - 50 >= 0) {
            coins++;
            sents -= 50;
        } else if (sents - 20 >= 0) {
            coins++;
            sents -= 20;
        } else if (sents - 10 >= 0) {
            coins++;
            sents -= 10;
        } else if (sents - 5 >= 0) {
            coins++;
            sents -= 5;
        } else if (sents - 2 >= 0) {
            coins++;
            sents -= 2;
        } else if (sents - 1 >= 0) {
            coins++;
            sents -= 1;
        } else {
            break;
        }
        
    }
console.log(coins);
}

coins(["1.23"]);