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

let cat = "love dog";
let dog = "love cat";


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
    note:'nguoi ngoai'
  },
  {
    id: 2,
    userId: 2,
    liftId: 2,
    from: 2,
    to: 10,
    time: new Date(2022, 3, 5).getTime(),
    note:'cu dan'
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

let inputValue=""
let container = document.getElementById("container");
let result = actions
  .filter((act) => {
    let start2023 = new Date(2023, 0, 1).getTime();
    return act.time >= start2023;
  })
  .sort((a, b) => {
    if (a.time < b.time) return -1;
    else return 1;
  })
  .forEach((act,index) => {
    let user = users.find((u) => u.id == act.userId);
    let lift = lifts.find((l) => l.id == act.liftId);
    const tbl = document.getElementById("tbl");
    const tblBody = document.createElement("tbody");
    const row = document.createElement("tr");

    const cell3 = document.createElement("td");
    cell3.innerText = `${act.from}`
    row.appendChild(cell3);

    // add the row to the end of the table body
    // tblBody.appendChild(row);

    const cell4 = document.createElement("td");
    cell4.innerText = `${act.to}`;
    row.appendChild(cell4);

    const cell5 = document.createElement("td");
    cell5.innerText = `${new Date(act.time).getFullYear()}-${new Date(act.time).getMonth() + 1
    }-${new Date(act.time).getDate()} ${new Date(
      act.time
    ).getHours()} : ${new Date(act.time).getMinutes()}`;
    row.appendChild(cell5);

    const cell6 = document.createElement("td");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerText = `Chi tiết`;
    btn2.innerText = `Xóa`;

    btn1.addEventListener("click", () => {
      document.getElementById("text").innerHTML = `Tên người dùng: ${user.name
        }; Tên thang máy: ${lift ? lift.name : ""}; Ghi chú: ${act.note ? act.note : 'Chưa có ghi chú'}`;
      document.getElementById("note").innerHTML = `Sửa ghi chú: `;
      const input = document.createElement("input");

      input.addEventListener("keyup",(ev)=>{
        inputValue=ev.target.value;
      })


      const btn3 = document.createElement("button");
      btn3.innerText = ` Sửa `;
      btn3.addEventListener("click",()=>{
        actions[index].note=inputValue
        document.getElementById("text").innerHTML = `Tên người dùng: ${user.name
        }; Tên thang máy: ${lift ? lift.name : ""}; Ghi chú: ${act.note ? act.note : 'Chưa có ghi chú'}`;
      })
      document.getElementById("note").appendChild(input);
      document.getElementById("note").appendChild(btn3);
    });

    btn2.addEventListener("click", () => {
      confirm("Bạn muốn xóa thông tin này chứ?");
    });

    cell6.appendChild(btn1);
    cell6.appendChild(btn2);
    row.appendChild(cell6);

    // put the <tbody> in the <table>
    tblBody.appendChild(row);
    tbl.setAttribute("border", "2");
    tbl.appendChild(tblBody);
  });

  


