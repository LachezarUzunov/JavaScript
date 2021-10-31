function lastK(n, k) {
  let emptyArr = [1];

  for (let i = 0; i < n - 1; i++) {
    let sliced = emptyArr.slice(-k);

    let sum = 0;
    for (let i = 0; i < sliced.length; i++) {
      sum += sliced[i];
    }
    emptyArr.push(sum);
  }
  console.log(emptyArr.join(" "));
}
lastK(6, 3);
