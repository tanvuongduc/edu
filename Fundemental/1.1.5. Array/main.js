const numbers = [1, 2, 1];

numbers.length;


Array.isArray(numbers);
Array.isArray('');

numbers[2] = 3;
numbers[3] = 4;
numbers.indexOf(2);
numbers.push(5);
numbers.pop();
numbers.unshift(0);
numbers.shift();

numbers.concat([5]);
[...numbers, 6];

typeof numbers;
let users = [
    {
        id: 1,
        name: 'tan',
        gender: true,
    },
    {
        id: 2,
        name: 'phuong',
        gender: false,
    },
    {
        id: 3,
        name: 'thanh',
        gender: true,
    },
    {
        id: 4,
        name: 'minh',
        gender: true,
    },
]

let _users = users.filter(user => {
    console.log('aaaaaaaaaaaaaaaaaaaa');
    if (user.id >= 3) {
        return true
    } else
        return false
})
console.log('bbbbbbbbbbbbbbbbb', _users);
users.forEach(user => {

    console.log('cccccccccccccccccccccc');
})
let __users = users.map(user => {
    if (user.gender) {
        user.gender = 'Nam';
        user.desc = 'Đẹp trai'
    } else {
        user.gender = 'Nu'
        user.desc = 'xinh gái'
    }
    return user;
})
console.log('dddddddddddddddddd', __users);
// let result = users.filter();
// (user) => {
//     if(user.gender == 'sfjshkdf') return user
// })
// for (let index = 0; index < 10; index++) {
//     console.log('aaaaaaaaaaaaaaaa', index);

// }
// let index = 0;
// do {
//     console.log('aaaaaaaaaaaaaaaa', users[index].name);
//     index ++;
// } while (index < users.length);


let lifts = [
    {
        id: 1,
        name: 'Thang máy 1',
        status: true,
        currentFloor: 1
    },
    {
        id: 2,
        name: 'Thang máy 2',
        status: false,
        currentFloor: 15
    },
    {
        id: 3,
        name: 'Thang máy 3',
        status: true,
        currentFloor: 10
    },
    {
        id: 4,
        name: 'Thang máy 4',
        status: true,
        currentFloor: 19
    },
]



