function treckingMania(input) {
    let groupsNumber = Number(input[0]);
    let index = 1;
    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groupsNumber; i++) {
        peopleInGroup = Number(input[index]);
        allPeople += peopleInGroup;
        index++;
        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kili += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else if (peopleInGroup > 40) {
            everest += peopleInGroup;
        }
        
    }


console.log(`${(musala / allPeople * 100).toFixed(2)}%`);
console.log(`${(monblan / allPeople * 100).toFixed(2)}%`);
console.log(`${(kili / allPeople * 100).toFixed(2)}%`);
console.log(`${(k2 / allPeople * 100).toFixed(2)}%`);
console.log(`${(everest / allPeople * 100).toFixed(2)}%`);

}

treckingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])