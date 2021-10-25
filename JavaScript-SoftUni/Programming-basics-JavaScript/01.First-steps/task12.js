function suma(input)    {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let interest = Number(input[2]);
    let endsum = deposit + time * ((deposit * interest/100)/12);

    console.log(endsum);

}

suma(["200", "3", "0.057"]);

