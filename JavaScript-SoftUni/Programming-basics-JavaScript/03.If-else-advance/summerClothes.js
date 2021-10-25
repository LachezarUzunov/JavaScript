function summerClothes(input) {
    let gradus = Number(input[0]);
    let timeOfDay = input[1];

    let outfit1 = "Sweatshirt";
    let outfit2 = "Shirt";
    let outfit3 = "T-Shirt";
    let outfit4 = "Swim Suit";

    let shoes1 = "Sneakers";
    let shoes2 = "Moccasins";
    let shoes3 = "Sandals";
    let shoes4 = "Barefoot";

    if ((gradus >= 10 && gradus <= 18)) {
        if (timeOfDay === "Morning") {
            console.log(`It's ${gradus} degrees, get your ${outfit1} and ${shoes1}.`);
        } else if (timeOfDay === "Afternoon") {
            console.log(`It's ${gradus} degrees, get your ${outfit2} and ${shoes2}.`);
        } else if (timeOfDay === "Evening") {
            console.log(`It's ${gradus} degrees, get your ${outfit2} and ${shoes2}.`);
        }
    } else if ((gradus > 18 && gradus <= 24)) {
        if (timeOfDay === "Morning") {
            console.log(`It's ${gradus} degrees, get your ${outfit2} and ${shoes2}.`);
        } else if (timeOfDay === "Afternoon") {
            console.log(`It's ${gradus} degrees, get your ${outfit3} and ${shoes3}.`);
        } else if (timeOfDay === "Evening") {
            console.log(`It's ${gradus} degrees, get your ${outfit2} and ${shoes2}.`);
        }
    } else if ((gradus >= 25)) {
        if (timeOfDay === "Morning") {
            console.log(`It's ${gradus} degrees, get your ${outfit3} and ${shoes3}.`);
        } else if (timeOfDay === "Afternoon") {
            console.log(`It's ${gradus} degrees, get your ${outfit4} and ${shoes4}.`);
        } else if (timeOfDay === "Evening") {
            console.log(`It's ${gradus} degrees, get your ${outfit2} and ${shoes2}.`);
        }
    }


}

summerClothes(["16",
"Morning"])
