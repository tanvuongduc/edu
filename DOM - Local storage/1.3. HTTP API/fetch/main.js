// what is callback
// setTimeout(() => console.log('hello'), 1000);


// using fetch api
// function readAllTodo(callback) {
//     fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(r => r.json()).then(d => callback(d));
// }

// function readAllTodo(callback) {
//     fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(r => r.json()).then(d => callback(d));
// }

// // using fetch api
// function createTodo(callback) {
//     fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Task 1',
//             userId: 1000,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             'tan': 'dep trai'
//         },
//     }).then(d => callback(d))
//         .catch(err => {

//         });
// }
// createTodo((d) => console.log(d));

// // GET lấy dữ liệu
// // POST Lưu dữ liệu
// // PUT Sửa dữ liệu
// // PATCH Sửa dữ liệu
// // DELETE Xóa dữ liệu

function doCallAPI() {
    // console.log('aaaaaaaaaaaaaaaaaaaa');
}

function callAPI() {
    doCallAPI()
}

function createTodo(callback) {
    callAPI();
}

createTodo();

let options1 = {
    method: 'POST',
    body: JSON.stringify({
        title: 'Task 1',
        userId: 1000,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'tan': 'dep trai'
    },
};
let options2 = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'tan': 'dep trai'
    },
};
// console.log('1111111111111111111');
// console.log('22222222222222222');
// console.log('33333333333333333333');

// fetch('https://jsonplaceholder.typicode.com/todos', options1).then(res => {
//     // console.log('bbbbbbbbbbbbbbbbbbb', res);
//     res.json().then(_res => {
//         console.log('ddddddddddddddddd', _res);

//     });
// }).catch(err => {
//     console.log('ccccccccccccccccccccc', err);
// })
// fetch('https://jsonplaceholder.typicode.com/todos', options2).then(res => {
//     // console.log('bbbbbbbbbbbbbbbbbbb', res);
//     res.json().then(_res => {
//         console.log('eeeeeeeeeeeeeeee', _res);

//     });
// }).catch(err => {
//     console.log('ccccccccccccccccccccc', err);
// })
// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/todos', options1),
//     fetch('https://jsonplaceholder.typicode.com/todos', options2)
// ]).then(res => {
//     console.log('aaaaaaaaaaaaaaaaaa', res);
//     Promise.all([res[0].json(), res[1].json()]).then(_res => {

//     console.log('bbbbbbbbbbbbbbbb', _res);
//     })
// }).catch(err => {

// })

// function callback1() {
//     console.log('aaaaaaaaaaaaaaaaa');
// }

// function callback2() {
//     console.log('ccccccccccccccccccc');
// }

// function test(cb) {
//     console.log('bbbbbbbbbbbbbbbbbbb', cb);
//     cb();
// }

// test(callback2)
let promise = new Promise((resolve, reject) => {
    if (1 == 1) {
        setTimeout(() => {
            resolve('hehehe');
        }, 5000);
    } else {
        reject('huhuhu');
    }
});
promise.then(res => {
    console.log('aaaaaaaaaaaaaaa', res);
}).catch(err => {
    console.log('bbbbbbbbbbbbbbbbbbbbbb', err);

}).finally(() => {
    
})
// console.log('aaaaaaaaaaaaaaaaaa');
// console.log('444444444444444444444444');
