function accountBalance(input) {
  let index = 0;
  let moneyin = input[index];
  let totalSum = 0;

  while (moneyin !== "NoMoreMoney") {
    moneyin = Number(input[index]);
    index++;
    if (moneyin <= 0) {
      console.log(`Invalid operation!`);
      break;
    } else {
      console.log(`Increase: ${moneyin.toFixed(2)}`);
      totalSum += moneyin;
      moneyin = input[index];
    }
  }
  console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);
