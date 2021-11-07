function pieceOfPay(flavors, start, end) {
  let startIndes = flavors.indexOf(start);
  let endIndex = flavors.indexOf(end);
  let sliced = flavors.slice(startIndes, endIndex + 1);
  return sliced;
}

pieceOfPay(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
