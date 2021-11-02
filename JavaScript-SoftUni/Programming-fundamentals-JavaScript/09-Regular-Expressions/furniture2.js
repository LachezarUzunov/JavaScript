function furniture2(input) {
  let pattern = />>(?<name>[A-za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g;
}

furniture2([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
