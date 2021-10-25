function fruitOrVegetable(input)    {
    let productName = input[0];
    // banana, apple, kiwi, cherry, lemon и grapes
    // tomato, cucumber, pepper и carrot

    if (productName === "banana" || productName === "apple" || productName === "kiwi" || productName === "cherry"
    || productName === "lemon" || productName === "grapes") {
        console.log("fruit"); 
    } else if (productName === "tomato" || productName === "cucumber" || productName === "pepper" ||
    productName === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

fruitOrVegetable(["kiwi"]);