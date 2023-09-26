const a = Number('2');
const b = parseInt('2');
const c = parseFloat('3.123456');

console.log(parseInt('2.1'));

console.log(typeof c);
console.log(c.toFixed(2));


const r = Math.random();
console.log(r);
// random between 1 and 10
console.log(r * 10);
console.log(Math.round(r * 10));
console.log(Math.ceil(r * 10));
console.log(Math.floor(r * 10));

console.log(Math.min(1, 2, 1, 2, 3));
console.log(Math.max(1, 2, 1, 2, 3));
