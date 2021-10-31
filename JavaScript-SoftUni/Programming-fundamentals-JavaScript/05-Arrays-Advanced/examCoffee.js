function coffee(input) {
  let orders = Number(input.shift());
  total = 0;

  for (let i = 0; i < orders; i++) {
    let sliced = input.splice(0, 3);
    let priceForCoffee =
      Number(sliced[0]) * Number(sliced[1]) * Number(sliced[2]);
    console.log(`The price for the coffee is: $${priceForCoffee.toFixed(2)}`);
    total += priceForCoffee;
  }
  console.log(`Total: $${total.toFixed(2)}`);
}

coffee(["2", "4.99", "31", "3", "0.35", "31", "5"]);
