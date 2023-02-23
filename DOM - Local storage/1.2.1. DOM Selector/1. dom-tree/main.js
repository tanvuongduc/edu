// DOM Selector
// 1. Document object
document;
document.all;
document.all.length;
document.head;
document.body;
document.URL;
for (let i = 0; i < document.scripts.length; i++) {
    const element = document.scripts[i];
    console.log(element.src);
}

/****************************************************/
let a = document.getElementById('id0')
let b = document.getElementsByClassName('title')
console.log(a, b);
