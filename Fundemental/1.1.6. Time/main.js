const now = new Date();
console.log(now);

console.log(now.getTime()); // epoch timestamp ms
const minute = 60 * 1000;
const after = new Date(now.getTime() + 15 * minute);
console.log(after);
const str = now.toISOString(); // ISO 

// get current date
str.substr();
// get current time
str.substr();

function printTime() {
    console.log(new Date());
}

setTimeout(printTime, 1000);

const it = setInterval(printTime, 1000);
clearInterval(it);
