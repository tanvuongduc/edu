// // // DOM Selector
// // // 1. Document object
// // document;
// // document.all;
// // document.all.length;
// // document.head;
// // document.body;
// // document.URL;
// // for (let i = 0; i < document.scripts.length; i++) {
// //     const element = document.scripts[i];
// //     console.log(element.src);
// // }

// // /****************************************************/
// // let a = document.getElementById('id0')
// // let b = document.getElementsByClassName('title')
// // console.log(a, b);
// let a = 2;
// let b = 3;

// let cat = "love dog";
// let dog = "love cat";


// let users = [
//   {
//     id: 1,
//     name: "tan",
//     gender: true,
//   },
//   {
//     id: 2,
//     name: "phuong",
//     gender: false,
//   },
//   {
//     id: 3,
//     name: "thanh",
//     gender: true,
//   },
//   {
//     id: 4,
//     name: "minh",
//     gender: true,
//   },
// ];
// let lifts = [
//   {
//     id: "1",
//     name: "Thang máy 1",
//     status: true,
//     currentFloor: 1,
//   },
//   {
//     id: "2",
//     name: "Thang máy 2",
//     status: false,
//     currentFloor: 15,
//   },
//   {
//     id: "3",
//     name: "Thang máy 3",
//     status: true,
//     currentFloor: 10,
//   },
//   {
//     id: "4",
//     name: "Thang máy 4",
//     status: true,
//     currentFloor: 19,
//   },
// ];

// let actions = [
//   {
//     id: 1,
//     userId: 1,
//     liftId: 1,
//     from: 1,
//     to: 10,
//     time: new Date(2023, 0, 2).getTime(),
//     // note: 'nguoi ngoai'
//   },
//   {
//     id: 2,
//     userId: 2,
//     liftId: 2,
//     from: 2,
//     to: 10,
//     time: new Date(2022, 3, 5).getTime(),
//     // note: 'cu dan'
//   },
//   {
//     id: 3,
//     userId: 3,
//     liftId: 3,
//     from: 3,
//     to: 10,
//     time: new Date(2021, 9, 10).getTime(),
//   },
//   {
//     id: 4,
//     userId: 4,
//     liftId: 4,
//     from: 4,
//     to: 10,
//     time: new Date(2023, 1, 20).getTime(),
//   },
//   {
//     id: 5,
//     userId: 1,
//     liftId: 2,
//     from: 5,
//     to: 10,
//     time: new Date(2023, 1, 20).getTime(),
//   },
//   {
//     id: 6,
//     userId: 2,
//     liftId: 3,
//     from: 6,
//     to: 10,
//     time: new Date(2019, 1, 22).getTime(),
//   },
//   {
//     id: 7,
//     userId: 3,
//     liftId: 4,
//     from: 7,
//     to: 10,
//     time: new Date(2023, 1, 28).getTime(),
//   },
// ];



// let inputValue = ''; //biến tạm

// let container = document.getElementById("container");
// let result = actions
//   .filter((act) => {
//     let start2023 = new Date(2023, 0, 1).getTime();
//     return act.time >= start2023;
//   })
//   .sort((a, b) => {
//     if (a.time < b.time) return -1;
//     else return 1;
//   })
//   .forEach((act, index) => {
//     let user = users.find((u) => u.id == act.userId);
//     let lift = lifts.find((l) => l.id == act.liftId);
//     const tbl = document.getElementById("tbl");
//     const tblBody = document.createElement("tbody");
//     const row = document.createElement("tr");

//     const cell3 = document.createElement("td");
//     cell3.innerText = `${act.from}`
//     row.appendChild(cell3);

//     // add the row to the end of the table body
//     // tblBody.appendChild(row);

//     const cell4 = document.createElement("td");
//     cell4.innerText = `${act.to}`;
//     row.appendChild(cell4);

//     const cell5 = document.createElement("td");
//     cell5.innerText = `${new Date(act.time).getFullYear()}-${new Date(act.time).getMonth() + 1
//     }-${new Date(act.time).getDate()} ${new Date(
//       act.time
//     ).getHours()} : ${new Date(act.time).getMinutes()}`;
//     row.appendChild(cell5);

//     const cell6 = document.createElement("td");
//     const btn1 = document.createElement("button");
//     const btn2 = document.createElement("button");
//     btn1.innerText = `Chi tiết`;
//     btn2.innerText = `Xóa`;

//     btn1.addEventListener("click", () => {
//       document.getElementById("text").innerHTML = `Tên người dùng: ${user.name
//         }; Tên thang máy: ${lift ? lift.name : ""}; Ghi chú: ${act.note ? act.note : 'Chưa có ghi chú'}`;
//       document.getElementById("note").innerHTML = `Sửa ghi chú: `;
//       const input = document.createElement("input");
//       input.addEventListener('keyup', (ev) => {
//         inputValue = ev.target.value
//         console.log('111111111111', actions);
//       })

//       const btn3 = document.createElement("button");
//       btn3.innerText = ` Sửa `;
//       btn3.addEventListener('click', (ev) => {
//         console.log('222222222222222', ev, inputValue, index, act.id);
//         let rowData = actions.find(_act => { // Tìm ra phần tử có id trùng với id của nút được nhấn
//           return _act.id === act.id
//         })
//         rowData.note = inputValue;
//         // actions[index].note = inputValue;
//         inputValue = '';
//         // console.log  ('33333333333333', actions);
//         document.getElementById("text").innerHTML = `Tên người dùng: ${user.name
//         }; Tên thang máy: ${lift ? lift.name : ""}; Ghi chú: ${act.note ? act.note : 'Chưa có ghi chú'}`;

//       })
//       document.getElementById("note").appendChild(input);
//       document.getElementById("note").appendChild(btn3);
//     });

//     btn2.addEventListener("click", () => {
//       confirm("Bạn muốn xóa thông tin này chứ?");
//     });

//     cell6.appendChild(btn1);
//     cell6.appendChild(btn2);
//     row.appendChild(cell6);

//     // put the <tbody> in the <table>
//     tblBody.appendChild(row);
//     tbl.setAttribute("border", "2");
//     tbl.appendChild(tblBody);
//   });


//   test = () => {
//     console.log('aaaaaaaaaaaaaaaaaaa');
//   }

//   testKeyboard = (ev) => {
//     console.log('bbbbbbbbbbbbbbbbbbbb', ev);

//   }

// let header = document.getElementById('header');
// let titles = document.getElementsByClassName('title')
// console.log('aaaaaaaaaaaa', header);
// for (let index = 0; index < titles.length; index++) {
//   const title = titles[index];
//   // console.log('bbbbbbbbbbbbbbb', title);
// }
// error
// titles.array.forEach(element => {
//   console.log('cccccccccccccccc', element);

// });
// setTimeout(() => {

//   header.innerText = 'abc';
//   header.style = 'color: red';
//   // header.className = 'hehehe';
//   header.classList.add('hehehe')

//   let container = document.getElementById('container');
//   let input = document.createElement('input');
//   input.setAttribute('type', 'text');
//   input.setAttribute('palaceholder', 'insert value here');
//   container.appendChild(input);

//   console.log('111111111111', input);
// }, 1000);

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
    // note: 'nguoi ngoai'
  },
  {
    id: 2,
    userId: 2,
    liftId: 2,
    from: 2,
    to: 10,
    time: new Date(2022, 3, 5).getTime(),
    // note: 'cu dan'
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


let newAct = {};
let selectedAction = {};

let container = document.getElementById('container');



function render() {
  container.innerHTML = null;
  let table = document.createElement('table');
  let titles = document.createElement('tr');

  let noTitle = document.createElement('th');
  noTitle.innerText = 'Số thứ tự'
  titles.appendChild(noTitle);
  let userNameTile = document.createElement('th');

  userNameTile.innerText = 'Tên người dùng';
  titles.appendChild(userNameTile);

  let liftTile = document.createElement('th');
  liftTile.innerText = 'Tên thang máy';
  titles.appendChild(liftTile);

  let fromTile = document.createElement('th');
  fromTile.innerText = 'Vào tầng';
  titles.appendChild(fromTile);

  let toTitle = document.createElement('th');
  toTitle.innerText = 'Ra tầng';
  titles.appendChild(toTitle);

  let timeTitle = document.createElement('th');
  timeTitle.innerText = 'Thời gian';
  titles.appendChild(timeTitle);
  table.appendChild(titles);

  let noteTitle = document.createElement('th');
  noteTitle.innerText = 'Ghi chú';
  titles.appendChild(noteTitle);
  table.appendChild(titles);

  let actTitle = document.createElement('th');
  actTitle.innerText = 'Thao tác';
  titles.appendChild(actTitle);
  table.appendChild(titles);

  actions.forEach((act, i) => {
    let user = users.find(u => {
      return u.id == act.userId;
    })
    let lift = lifts.find(l => {
      return l.id == act.liftId;
    })
    // console.log('aaaaaaaaaaaaaaa', user, lift);
    let row = document.createElement('tr');

    let col1 = document.createElement('td');
    col1.innerText = i + 1;
    row.appendChild(col1);
    let col2 = document.createElement('td');
    col2.innerText = user.name;
    row.appendChild(col2);
    let col3 = document.createElement('td');
    col3.innerText = lift.name;
    row.appendChild(col3);

    let col4 = document.createElement('td');
    col4.innerText = act.from;
    row.appendChild(col4);

    let col5 = document.createElement('td');
    col5.innerText = act.to;
    row.appendChild(col5);

    let col6 = document.createElement('td');
    // col6.innerText = act.time;
    let date = new Date(act.time);
    let dateString = `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    col6.innerText = dateString;
    row.appendChild(col6);

    let col7 = document.createElement('td');
    col7.innerText = act.note || '';
    row.appendChild(col7);

    let col8 = document.createElement('td');
    col8.innerHTML = `<button onclick="onEdit(${i})">Edit</button>
    <button onclick="onDelete(${i})">Delete</button>`;
    row.appendChild(col8);
    table.appendChild(row);
  });

  container.appendChild(table);
}

let nameSelect = document.getElementById('nameSelect')
users.forEach(user => {
  let opt = document.createElement('option');
  opt.value = user.id;
  opt.innerText = user.name;
  nameSelect.appendChild(opt);
})

let liftSelect = document.getElementById('liftSelect')
liftSelect.addEventListener('change', (ev) => {
  newAct.liftId = +ev.target.value;
})
lifts.forEach(lift => {
  let opt = document.createElement('option');
  opt.value = lift.id;
  opt.innerText = lift.name;
  liftSelect.appendChild(opt);
})

onNameChange = (ev) => {
  newAct.userId = +ev.target.value;
}

let fromInput = document.getElementById('fromInput');
fromInput.addEventListener('keyup', (ev) => {
  newAct.from = +ev.target.value;
})
let toInput = document.getElementById('toInput');
toInput.addEventListener('keyup', (ev) => {
  newAct.to = +ev.target.value;
})

let noteInput = document.getElementById('noteInput');
noteInput.addEventListener('keyup', (ev) => {
  newAct.note = ev.target.value;
})

onCreate = () => {
  console.log('00000000000', newAct, actions.length);
  newAct.id = Math.random() * 1000;
  newAct.time = (new Date()).getTime();
  actions.push(newAct);
  render();
  resetForm();
  console.log('11111111111111', newAct, actions);
}

resetForm = () => {
  newAct = {};
  selectedAction = {};
  let nameSelect = document.getElementById('nameSelect');
  let liftSelect = document.getElementById('liftSelect');
  let fromInput = document.getElementById('fromInput');
  let toInput = document.getElementById('toInput');
  let noteInput = document.getElementById('noteInput');

  let btnAdd = document.getElementById('btnAdd');
  let btnEdit = document.getElementById('btnEdit');
  let btnCancel = document.getElementById('btnCancel');
  btnAdd.classList.remove('hide');
  btnEdit.classList.add('hide');
  btnCancel.classList.add('hide');
  nameSelect.value = '';
  liftSelect.value = '';
  fromInput.value = null;
  toInput.value = null;
  noteInput.value = '';

}

onEdit = (actIndex) => {
  console.log('aaaaaaaaaaaaaaaa', actIndex);
  selectedAction = actions[actIndex];
  let nameSelect = document.getElementById('nameSelect');
  let liftSelect = document.getElementById('liftSelect');
  let fromInput = document.getElementById('fromInput');
  let toInput = document.getElementById('toInput');
  let noteInput = document.getElementById('noteInput');

  let btnAdd = document.getElementById('btnAdd');
  let btnEdit = document.getElementById('btnEdit');
  let btnCancel = document.getElementById('btnCancel');
  btnAdd.classList.add('hide');
  btnEdit.classList.remove('hide');
  btnCancel.classList.remove('hide');
  nameSelect.value = selectedAction.userId
  liftSelect.value = selectedAction.liftId
  fromInput.value = selectedAction.from
  toInput.value = selectedAction.to
  noteInput.value = selectedAction.note || '';
}

onSave = () => {
  let nameSelect = document.getElementById('nameSelect');
  let liftSelect = document.getElementById('liftSelect');
  let fromInput = document.getElementById('fromInput');
  let toInput = document.getElementById('toInput');
  let noteInput = document.getElementById('noteInput');
  selectedAction.userId = nameSelect.value;
  selectedAction.liftId = liftSelect.value;
  selectedAction.from = fromInput.value;
  selectedAction.to = toInput.value;
  selectedAction.note = noteInput.value;
  render();
  resetForm();
}

onCacel = () => {
  resetForm();
}

onDelete = (actIndex) => {
  if (confirm('Bạn có chắc muốn xóa dòng này chứ?')) {
    actions.splice(actIndex, 1);
    render();
  }
}

render();


// window.sessionStorage.setItem('name', 'Tan')
// window.sessionStorage.setItem('class', 'IT')