// what is callback
// setTimeout(() => console.log('hello'), 1000);


// using fetch api
function readAllTodo(callback) {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(r => r.json()).then(d => callback(d));
}

// using fetch api
function createTodo(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Task 1',
            userId: 1000,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'tan': 'dep trai'
        },
    }).then(d => callback(d))
        .catch(err => {

        });
}

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

// let a
// getData().then(() => {
//     console.log('thanh cong');
// }).catch(err => {
//     console.log();
// })


// readAllTodo((d) => {
//     document.body.innerHTML = JSON.stringify(d);
// });

createTodo((d) => console.log(d));

// GET lấy dữ liệu
// POST Lưu dữ liệu
// PUT Sửa dữ liệu
// PATCH Sửa dữ liệu
// DELETE Xóa dữ liệu
