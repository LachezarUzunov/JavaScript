function dog(input){
    let dogFood = 2.50;
    let other = 4;
    let dogs = input[0];
    let animals = input[1];
    let dolare = dogs * dogFood + animals * other;

    console.log(`${dolare} lv.`);

}

dog(["5", "4"]);