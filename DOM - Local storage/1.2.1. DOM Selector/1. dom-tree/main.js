// // DOM Selector
// // 1. Document object
// document;
// document.all;
// document.all.length;
// document.head;
// document.body;
// document.URL;
// for (let i = 0; i < document.scripts.length; i++) {
//     const element = document.scripts[i];
//     console.log(element.src);
// }

// /****************************************************/
// let a = document.getElementById('id0')
// let b = document.getElementsByClassName('title')
// console.log(a, b);
let a = 2;
let b = 3;
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
let lifts = [
    {
        id: '1',
        name: 'Thang máy 1',
        status: true,
        currentFloor: 1
    },
    {
        id: '2',
        name: 'Thang máy 2',
        status: false,
        currentFloor: 15
    },
    {
        id: '3',
        name: 'Thang máy 3',
        status: true,
        currentFloor: 10
    },
    {
        id: '4',
        name: 'Thang máy 4',
        status: true,
        currentFloor: 19
    },
]

let actions = [
    {
        id: 1,
        userId: 1,
        liftId: 1,
        from: 1,
        to: 10,
        time: (new Date(2023, 0, 2)).getTime(),
    },
    {
        id: 2,
        userId: 2,
        liftId: 2,
        from: 2,
        to: 10,
        time: (new Date(2022, 3, 5)).getTime(),
    },
    {
        id: 3,
        userId: 3,
        liftId: 3,
        from: 3,
        to: 10,
        time: (new Date(2021, 9, 10)).getTime(),
    },
    {
        id: 4,
        userId: 4,
        liftId: 4,
        from: 4,
        to: 10,
        time: (new Date(2023, 1, 20)).getTime(),
    },
    {
        id: 5,
        userId: 1,
        liftId: 2,
        from: 5,
        to: 10,
        time: (new Date(2023, 1, 20)).getTime(),
    },
    {
        id: 6,
        userId: 2,
        liftId: 3,
        from: 6,
        to: 10,
        time: (new Date(2019, 1, 22)).getTime(),
    },
    {
        id: 7,
        userId: 3,
        liftId: 4,
        from: 7,
        to: 10,
        time: (new Date(2023, 1, 28)).getTime(),
    },
]

let container = document.getElementById('container');

let result = actions
    .filter(act => {
        console.log('aaaaaaaaaaa', act);
        // let actYear = new Date(act.time).getFullYear();
        // return actYear >= 2023;
        let start2023 = new Date(2023, 0, 1).getTime();
        return act.time >= start2023;
    })
    .sort((a, b) => {
        if (a.time < b.time) return -1;
        else return 1;
    })
    .forEach(act => {
        let user = users.find(u => u.id == act.userId);
        let lift = lifts.find(l => l.id == act.liftId);
        // console.log('111111111111111111', user);
        // act.userId
    //     return `
    // <p>Người dùng: ${user.name}</p>
    // <p>Tên thang máy: ${lift ? lift.name : ''}</p>
    // <p>Vào tầng: ${act.from}</p>
    // <p>Ra tầng: ${act.to}</p>
    // <p>Thời gian: năm ${new Date(act.time).getFullYear()} - tháng ${new Date(act.time).getMonth() + 1} - ngày ${new Date(act.time).getDate()} ${new Date(act.time).getHours()} : ${new Date(act.time).getMinutes()} - </p>
    // `

        let p = document.createElement('p');
        p.innerText = `Người dùng: ${user.name}`;
        container.appendChild(p)
    })
