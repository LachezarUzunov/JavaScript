function storage2(list) {
  let obj = {};
  for (let product of list) {
    let tokens = product.split(" ");
    let prod = tokens[0];
    let quantity = Number(tokens[1]);

    if (obj.hasOwnProperty(prod)) {
      obj[prod] += quantity;
    } else {
      obj[prod] = quantity;
    }
  }
  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

storage2(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
