let a = 2;
let b = 3;
let cat = "love girl";
let dog = "love cat";
let f = 4;
let d = 4;
let e = 5;
let users = [
    {
        id: 1,
        name: "tan",
        gender: true,
    },
    {
        id: 2,
        name: "phuong",
        gender: false,
    },
    {
        id: 3,
        name: "thanh",
        gender: true,
    },
    {
        id: 4,
        name: "minh",
        gender: true,
    },
];
let lifts = [
    {
        id: "1",
        name: "Thang máy 1",
        status: true,
        currentFloor: 1,
    },
    {
        id: "2",
        name: "Thang máy 2",
        status: false,
        currentFloor: 15,
    },
    {
        id: "3",
        name: "Thang máy 3",
        status: true,
        currentFloor: 10,
    },
    {
        id: "4",
        name: "Thang máy 4",
        status: true,
        currentFloor: 19,
    },
];

let actions = [
    {
        id: 1,
        userId: 1,
        liftId: 1,
        from: 1,
        to: 10,
        time: new Date(2023, 0, 2).getTime(),
    },
    {
        id: 2,
        userId: 2,
        liftId: 2,
        from: 2,
        to: 10,
        time: new Date(2022, 3, 5).getTime(),
    },
    {
        id: 3,
        userId: 3,
        liftId: 3,
        from: 3,
        to: 10,
        time: new Date(2021, 9, 10).getTime(),
    },
    {
        id: 4,
        userId: 4,
        liftId: 4,
        from: 4,
        to: 10,
        time: new Date(2023, 1, 20).getTime(),
    },
    {
        id: 5,
        userId: 1,
        liftId: 2,
        from: 5,
        to: 10,
        time: new Date(2023, 1, 20).getTime(),
    },
    {
        id: 6,
        userId: 2,
        liftId: 3,
        from: 6,
        to: 10,
        time: new Date(2019, 1, 22).getTime(),
    },
    {
        id: 7,
        userId: 3,
        liftId: 4,
        from: 7,
        to: 10,
        time: new Date(2023, 1, 28).getTime(),
    },
];

let container = document.getElementById("container");
let c = 10;
let result = actions
    .filter(act => {
        console.log('aaaaaaaaaaa', act);
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
       
        const tbl = document.getElementById("tbl");
        const tblBody = document.createElement("tbody");
        
            
            const row = document.createElement("tr");

            const cell1 = document.createElement("td");
            const cellText1 = document.createTextNode(`${user.name}`);
            cell1.appendChild(cellText1);
            row.appendChild(cell1);

           

            const cell2 = document.createElement("td");
            const cellText2 = document.createTextNode(`${lift ? lift.name : ''}`);
            cell2.appendChild(cellText2);
            row.appendChild(cell2);

           

            const cell3 = document.createElement("td");
            const cellText3 = document.createTextNode(`${act.from}`);
            cell3.appendChild(cellText3);
            row.appendChild(cell3);

            

            const cell4 = document.createElement("td");
            const cellText4 = document.createTextNode(`${act.to}`);
            cell4.appendChild(cellText4);
            row.appendChild(cell4);

           

            const cell5 = document.createElement("td");
            const cellText5 = document.createTextNode(`${new Date(act.time).getFullYear()}-${new Date(act.time).getMonth() + 1}-${new Date(act.time).getDate()} ${new Date(act.time).getHours()} : ${new Date(act.time).getMinutes()}`);
            cell5.appendChild(cellText5);
            row.appendChild(cell5);

            tblBody.appendChild(row);
            
            const cell6 = document.createElement("td");
            const btn1 = document.createElement("button");
            const btn2 = document.createElement("button");d
            row.appendChild(cell6);

            tblBody.appendChild(row);


        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    })



