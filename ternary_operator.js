// let a = 10, b = 20;
// let highest = a > b ? a : b;
// console.log(highest);

let a = 10, b = 20, c = 30;
let highest = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(highest);