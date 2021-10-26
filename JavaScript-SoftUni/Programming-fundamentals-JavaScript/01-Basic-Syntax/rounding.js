function rounding(num, toRound) {
  if (toRound > 15) {
    toRound = 15;
  }
  console.log(parseFloat(num.toFixed(toRound)));
}

rounding(3.1415926535897932384626433832795, 2);
