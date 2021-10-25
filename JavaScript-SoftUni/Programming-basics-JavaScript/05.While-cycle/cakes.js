function cake(input) {
    let width = Number(input[0]);
    let latitude = Number(input[1]);
    let cakeSquareSm = width * latitude;
    let index = 2;
    let piecesTaken = Number(input[index]);
    let sumPiecesTaken = 0;
    let command = input[index];

    while(command !== "STOP") {
        let command = input[index];
        let piecesTaken = Number(input[index]); 
        if(cakeSquareSm <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSquareSm)} pieces more.`);
            break;
        }
        cakeSquareSm -= piecesTaken;
        sumPiecesTaken += piecesTaken;
        index++;
    }


        console.log(`${Math.abs(cakeSquareSm)} pieces are left.`);
    
}

cake(["10", "2", "2", "4", "6", "STOP"]);
