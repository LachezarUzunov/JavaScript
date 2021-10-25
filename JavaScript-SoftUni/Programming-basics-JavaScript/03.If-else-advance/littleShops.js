function littleShops(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);

    if (town === "Sofia") {
        if (product === "coffee") {
            console.log(count * 0.50);
        } else if (product === "water") {
            console.log(count * 0.80);
        } else if (product === "beer") {
            console.log(count * 1.20);
        } else if (product === "sweets") {
            console.log(count * 1.45);
        } else if (product === "peanuts") {
            console.log(count * 1.60);
        }
        
    } else if (town === "Plovdiv") {
        if (product === "coffee") {
            console.log(count * 0.40);
        } else if (product === "water") {
            console.log(count * 0.70);
        } else if (product === "beer") {
            console.log(count * 1.15);
        } else if (product === "sweets") {
            console.log(count * 1.30);
        } else if (product === "peanuts") {
            console.log(count * 1.50);
        }  


    } else if (town === "Varna") {
        if (product === "coffee") {
            console.log(count * 0.450);
        } else if (product === "water") {
            console.log(count * 0.70);
        } else if (product === "beer") {
            console.log(count * 1.10);
        } else if (product === "sweets") {
            console.log(count * 1.35);
        } else if (product === "peanuts") {
            console.log(count * 1.55);
        }


    }



}

littleShops(["coffee", "Varna", "2"]);
