
// css selector
// query Selector

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
// console.log('aaaaaaaaaaaaa', liOdd, liEven);
liOdd.forEach(function (li, index) {
    li.style.background = '#f00';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#00f';
}

// traverse the dom
const ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.children);


// ul.firstElementChild.parentElement;

// Create element
const li = document.createElement('li');
li.className = 'collection-item';
li.innerHTML = 'New Item';
// console.log(li);

// setTimeout(() => {
//     ul.appendChild(li);
// }, 1000);

let btnAdd = document.getElementById('btnAdd');
let inputId = document.getElementById('inputId');
let newTaskContent = getInitTask();
// console.log(inputId.value);

btnAdd.addEventListener('click', (ev) => {
    console.log('aaaaaaaaaaaa', newTaskContent);
    items.push(newTaskContent);
    addItem(newTaskContent, items.length - 1, success, fail)
    inputId.value = '';
    newTaskContent = getInitTask();
});

inputId.addEventListener('input', (ev) => {
    newTaskContent = {
        name: inputId.value,
        status: false,
        created: new Date()
    };
});

// // let us build the whole list in javascript
let items = [];

function getInitTask() {
    return {
        name: '',
        status: false,
        created: null,
    }
}
// const test = {
//     name: 'Tan',
//     age: 30
// };
// console.log(JSON.stringify(test));
function addItem(item, index, resolve, reject) {

    if (reject && (item === null || item === '' || item === undefined)) {
        reject();
        return
    }
    let _li = document.createElement('li');
    _li.innerText = item.name + '   Created Time: ' + item.created;
    _li.className = 'collection-item';
    _li.style.background = item.status ? '#f38f8f' : '#9e8ff3'

    let btnRemove = document.createElement('button');
    btnRemove.innerText = 'X';
    btnRemove.id = index;
    btnRemove.addEventListener('click', (ev) => {
        items.splice(btnRemove.id, 1);
        renderList()
        storeData()
    });
    _li.appendChild(btnRemove);

    
    let btnToggle = document.createElement('button');
    btnToggle.innerText = 'Check';
    btnToggle.id = index;
    btnToggle.addEventListener('click', (ev) => {
        items[index].status = !items[index].status;
        renderList()
        storeData()
    });
    _li.appendChild(btnToggle);

    ul.appendChild(_li);
    storeData();
    if (resolve)
        resolve()

}
function renderList() {
    ul.innerHTML = '';
    items.forEach((el, i) => {
        addItem(el, i)
    });
}

function success() {
    // console.log('Itemm da duoc tao thanh cong');
}

function fail() {
    // console.log('Tao Item that bai');
}

function storeData() {
    localStorage.setItem('todoList', JSON.stringify(items));
}

function fetchData() {
    let data = localStorage.getItem('todoList');
    data = JSON.parse(data);
    items = data || [];
    renderList();
}

fetchData()

function getData() {
    // console.log('Start')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: { userId: 1 }, code: 'SUCCESS' });
        }, 3000)
    })
}

getData().then((res) => {

}).catch(err => {
})

// items.forEach(sideEffect)

function sideEffect(value, i) {
    // console.log(value, i);
}

function loop(callback) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i], i)
    }
}

loop(sideEffect);


let a = items.filter((it, i) => {
    if (i % 2 === 0) {
        return true
    }
    return false;
})
// console.log(items, a);

