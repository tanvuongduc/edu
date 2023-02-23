
const numbers = [1, 2, 3];


// print array numbers
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let i = 0;
do {
    console.log('aaaaaaaaa', numbers[i]);
    i++;
} while (i<numbers.length)

// // es6 for of
// for (const n of numbers) {
//     console.log(n);
// }

// // forEach
// numbers.forEach(n => console.log(n));
// // double
// numbers.map(a => a *2);
// numbers.filter(a => a % 2 === 0);
// // while loop


// // concat into a string
// numbers.join(',');
