function fruit (fr, weight, price) {
    weight = weight / 1000;

    console.log(`I need $${(weight * price).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fr}.`);
}

fruit('orange', 2500, 1.80);