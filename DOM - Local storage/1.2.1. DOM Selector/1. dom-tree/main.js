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
let lifts = [
  {
    id: 1,
    name: "Thang máy 1",
    status: true,
    currentFloor: 1,
  },
  {
    id: 2,
    name: "Thang máy 2",
    status: false,
    currentFloor: 15,
  },
  {
    id: 3,
    name: "Thang máy 3",
    status: true,
    currentFloor: 10,
  },
  {
    id: 4,
    name: "Thang máy 4",
    status: true,
    currentFloor: 19,
  },
];
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
let actions = [
  {
    id: 1,
    userId: 1,
    liftId: 1,
    from: 1,
    to: 10,
    time: new Date(2023, 1, 2).getTime(),
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

function render() {
  let list = `<tr>
      <th>ID</th>
      <th>Vào tầng</th>
      <th>Ra tầng</th>
      <th>Thời gian</th>
      <th>Tùy chọn</th>
  </tr>`;

  actions.map((a, i) => {
    list += `<tr>
      <td>${a.id}</td>
      <td>${a.from}</td>
      <td>${a.to}</td>
      <td>
        ${new Date(a.time).getFullYear()} -
        ${new Date(a.time).getMonth()} -
        ${new Date(a.time).getDate()}
    </td>
      <td>
        <button id="btn-detail" onclick="addDetail(${i})">Detail</button>
        <button id="btn-delete" onclick="deleteDetail(${
          a.id
        })">Delete</button>
      </td>
    </tr>`;
  });
  document.getElementById("table").innerHTML = list;
}
render();

const listDetail = [];

function addDetail(i) {
  listDetail.unshift(actions[i]);
  renderDetail();
  // console.log(listDetail);
}

function deleteDetail(i) {
  console.log(i);
  console.log(listDetail.length);
  if (listDetail.length > 0) {
    listDetail.map((val, index) => {
      if (val.id == i) {
        console.log(index);
        listDetail.splice(index, 1);
      }
    });
    renderDetail();
  } else {
    alert("Không thể xóa");
  }
  console.log(listDetail);
}

function renderDetail() {
  let list = `<th>Thông tin chi tiết</th>`;
  listDetail.map((val, i) => {
    let user = users.find((u) => {
      if (u.id == val.userId) return true; //${user.name}
    });
    let lift = lifts.find((lif) => {
      if (lif.id == val.liftId) return true; //${lift.name}
    });
    list += `<tr>
      <td>
        <p>ID: ${val.id}</p>
        <p>Người dùng: ${user.name}</p>
        <p>Tên thang máy: ${lift ? lift.name : ""}</p>
        <p>Vào tầng: ${val.from}</p>
        <p>Ra tầng: ${val.to}</p>
        <p>Thời gian: năm ${new Date(val.time).getFullYear()} -
          tháng ${new Date(val.time).getMonth()} -
          ngày ${new Date(val.time).getDate()}
        </p>
        <p>Ghi chú: <input type="text" id="note" /></p>
      </td>
      </tr>`;
  });
  document.getElementById("tableDetail").innerHTML = list;
}