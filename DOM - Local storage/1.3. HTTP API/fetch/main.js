// what is callback
// setTimeout(() => console.log('hello'), 1000);

// let 
// let obj2 = {...obj};
// let obj3 = JSON.parse(JSON.stringify(obj))

// using fetch api
// function readAllTodo(callback) {
//     fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(r => r.json()).then(d => callback(d));
// }

// using fetch api
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

// let text = 'aaaaaa';
// text.a1 = 'aaaa'

// let items = [1, 2, 3, 4, 5, 6]
// function getData() {
//     return new Promise((resolve, reject) => {
//         //tao req
//         if (items.length > 5)
//             resolve(items)
//         else
//             reject('Array too short');
//     })
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

// createTodo((d) => console.log(d));

// GET lấy dữ liệu
// POST Lưu dữ liệu
// PUT Sửa dữ liệu
// PATCH Sửa dữ liệu
// DELETE Xóa dữ liệu


// function createTodo(callback) {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Task 1',
//             userId: 1000,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             'tan': 'dep trai'
//         },
//     }
//     fetch('https://jsonplaceholder.typicode.com/todos', options).then(res => {
//         console.log('bb',res);
//         res.json().then(_res => {
//             console.log('cc',_res);
//         })
//     }).catch(err => {
//         console.log(err);
//     });
//     fetch('https://jsonplaceholder.typicode.com/todos', option1).then(res => {
//         // console.log('bb',res);
//         res.json().then(_res => {
//             console.log('dd',_res);
//         })
//     }).catch(err => {
//         console.log(err);
//     });
//     // console.log("aaaaa");
//     Promise
//     fetch('https://jsonplaceholder.typicode.com/users', options).then(res => {
//         // console.log('bb',res);
//         res.json().then(_res => {
//             console.log('dd',_res);
//         })
//     }).catch(err => {
//         console.log(err);
//     });


// }

// createTodo();


// function createTodo() {
//     fetch('https://jsonplaceholder.typicode.com/duong', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'Task 1',
//         userId: 1000,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//           street: 'Kulas Light',
//           suite: 'Apt. 556',
//           city: 'Gwenborough',
//           zipcode: '92998-3874',
//           geo: {
//             lat: '-37.3159',
//             lng: '81.1496',
//           },
//         },
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => {
//         response.json().then((data) => {
//           console.log(data);
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

// fetch('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'John',
//     age: 30
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

fetch('https://api.github.com/users/DuonggPh')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


  

// function createTodo() {
//     fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Task 1',
//             completed: false,
//             userId: 1
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     }).then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));
// }

  
