function pari(input)  {
    let strawberryPrice = Number(input[0]);
    let banani = Number(input[1]);
    let portokali = Number(input[2]);
    let malini = Number(input[3]);
    let strawberryKg = Number(input[4]);

    let maliniPrice = strawberryPrice / 2;
    let portokaliPrice = maliniPrice - (maliniPrice * 40/100);
    let bananiPrice = maliniPrice - (maliniPrice * 80/100);

    let budjet = (strawberryPrice * strawberryKg) + (maliniPrice * malini) + (bananiPrice * banani) + (portokaliPrice * portokali);

    console.log(budjet);

}

pari(["48", "10", "3.3", "6.5", "1.7"])

