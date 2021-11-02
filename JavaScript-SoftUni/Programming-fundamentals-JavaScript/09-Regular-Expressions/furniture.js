function furniture(string) {
  // >>(?<furniture>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)

  let pattern = />>(?<furniture>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
  let match = [];
  let moneySpent = 0;

  let matches = pattern.exec(string);

  while (matches !== null) {
    moneySpent += Number(matches[2] * Number(matches[3]));
    match.push(matches[1]);
    matches = pattern.exec(string);
  }
  console.log(`Bought furniture:`);
  for (let element of match) {
    console.log(`${element}`);
  }
  console.log(`Total money spend: ${moneySpent.toFixed(2)}`);
}
furniture(">>Sofa<<312.23!3, >>TV<<300!5, >Invalid<<!5, Purchase");
