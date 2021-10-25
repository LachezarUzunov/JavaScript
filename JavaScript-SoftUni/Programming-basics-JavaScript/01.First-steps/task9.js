function discount(input){
    let price = 7.61;
    let disc = 0.18;
    let ozel = input[0] * price;
    let discc = ozel * disc;
    let endDeal = ozel - discc;

    

    console.log(`The final price is: ${endDeal} lv.`);
    console.log(`The discount is: ${discc} lv.`);

}

discount(["550"]);