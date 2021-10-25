function checks(input) {

let a = Number(input[0]);
let fitsIn = 0;

fitsIn = Math.floor(a / 2);
// ost = a - ost;
let ost = 0;
ost = (a % 2).toFixed(2);

fitsIn = Math.floor(ost / 1);
ost = Math.floor(ost / 0.50);




console.log(ost);
}

checks(["4.56"])