function softUniBar(input) {
  //  name
  //  %(?<customer>[A-Z][a-z]*)%
  //  peoduct
  // <(?<product>\w+)>
  // pipe is control symbol so we need to escape it
  // quantity
  //  \|(?<qty>\d+)\|
  // dollar is also control symbol and should be escaped
  // price
  //  (\d+(?:\.\d+)*)\$
  // end regex
  //   %(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$
  //
  let pattern =
    /%(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/;
  let total = 0;

  while (input[0] != "end of shift") {
    let line = input.shift();

    let match = pattern.exec(line);

    if (match != null) {
      let [, name, product, qty, price] = match;
      qty = Number(qty);
      price = Number(price);
      let pricePerMan = Number((qty * price).toFixed(2));
      total += pricePerMan;
      console.log(`${name}: ${product} - ${pricePerMan.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBar([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
