let name = 'Tan';
// hoisting
const className = 'IT';

console.log('aaaaaaaaaaaaaaa', name)
name = 123
console.log('aaaaaaaaaaaaaaa', name)
name = true
console.log('aaaaaaaaaaaaaaa', name)
var age
console.log('bbbbbbbbbbbbbbbbbb', age)
const gender = 'Male'
// gender = "female"
let status = 'true';
function run() {
    let status = true;
    console.log('dddddddddddddd', status);
}
run();
console.log('ccccccccccccccccc', status);