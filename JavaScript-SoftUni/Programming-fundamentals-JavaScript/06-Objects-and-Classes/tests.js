function tests(test) {
  for (let i = 0; i < test.length; i += 2) {
    let product = test[i];
    let quant = Number(test[i + 1]);

    test[i + 1] = quant + 5;
  }
  console.log(test);
}

tests(["Chips", "5", "CocaCola", "9", "Bananas", "14"]);
