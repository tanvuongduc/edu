
console.log(1 == '1');
console.log(1 === '1');

Boolean('');
Boolean(0)
Boolean(null);
Boolean(undefined);

// check empty array
Boolean([]);
const arr = [];
// is empty array
Array.isArray(arr) && arr.length > 0; // 

console.log(true ? 'true' : 'false');

const a = '1';
switch (a) {
    case '1':
        console.log('');
        break;
    case true:
        console.log(true);
        break;
    default:
        console.log(a);
}

// use typeof

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);