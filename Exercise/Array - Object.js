let users = [
    {
        id: 1,
        name: "tan",
        gender: true,
        roleId: 1,
    },
    {
        id: 2,
        name: "phuong",
        gender: false,
        roleId: 2,
    },
    {
        id: 3,
        name: "thanh",
        gender: true,
        roleId: 4,
    },
    {
        id: 4,
        name: "minh",
        gender: true,
        roleId: 5,
    },
];

let roles = [ // Quyền của hệ thống
    {
        id: 1,
        name: "admin",
    },
    {
        id: 2,
        name: "citizen",
    },
    {
        id: 3,
        name: "security",
    },
    {
        id: 4,
        name: "staff",
    },
    {
        id: 5,
        name: "guest",
    },
]

let deviceStatues = [
    {
        id: 1,
        name: "Hỏng",
    },
    {
        id: 2,
        name: "Đóng",
    },
    {
        id: 3,
        name: "Mở",
    },
    {
        id: 4,
        name: "Bật",
    },
    {
        id: 5,
        name: "Tắt",
    },
    {
        id: 6,
        name: "Số 0",
    },
    {
        id: 7,
        name: "Sô 1",
    },
    {
        id: 8,
        name: "Sô 2",
    },
    {
        id: 9,
        name: "Sô 3",
    },
]

let deviceTypes = [
    {
        id: 1,
        name: "Cửa",
        description: 'Cửa dùng để đóng, mở',
        statuses: [1,2,3], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
    },
    {
        id: 2,
        name: "Quạt",
        description: 'Quạt mát',
        statuses: [1,6,7,8,9], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
    },
    {
        id: 3,
        name: "Đèn",
        description: 'Đèn sáng',
        statuses: [1,4,5], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
    },
]

let devices = [
    {
        id: 1,
        name: "Cửa Chính p101",
        description: 'Cửa ra vào phòng 101',
        deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 2, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 1 // User Id; Id chủ sở hữu thiết bị
    },
    {
        id: 2,
        name: "Cửa nhà vệ sinh p101",
        description: 'Cửa nhà vệ sinh phòng 101',
        deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 3, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 1 // User Id; Id chủ sở hữu thiết bị
    },
    {
        id: 3,
        name: "Đèn 1 p.101",
        description: 'Đèn số 1 phòng 101',
        deviceType: 3, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 5, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 1 // User Id; Id chủ sở hữu thiết bị
    },
    {
        id: 4,
        name: "Quạt 1 p.101",
        description: 'Quạt số 1 phong 101',
        deviceType: 2, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 9, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 1 // User Id; Id chủ sở hữu thiết bị
    },

    {
        id: 5,
        name: "Cửa Chính p212",
        description: 'Cửa ra vào phòng 212',
        deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 1, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 2 // User Id; Id chủ sở hữu thiết bị
    },

    {
        id: 6,
        name: "Cửa Chính p213",
        description: 'Cửa ra vào phòng 213',
        deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 3, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 3 // User Id; Id chủ sở hữu thiết bị
    },
    {
        id: 7,
        name: "Đèn 1 p.213",
        description: 'Đèn số 1 phòng 213',
        deviceType: 3, // Device Type Id; Thiết ị thuộc loại thiết bị nào
        status: 4, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
        owner: 3 // User Id; Id chủ sở hữu thiết bị
    },
]

// Yêu cầu: 
// Todo:
//  - Hiển thị danh sách tất cả user trong hệ thống, bao gồm quyền của người dùng đó (hiển thị thành bảng)
//  - Khi nhấn vào mỗi dòng trong bảng, hiển thị chi tiết các thiết bị mà người dùng sở hữu (hiển thị thành bảng)
//  - Khi nhấn vào mỗi thiết bị, cho phép thay đổi trạng thái của thiết bị đó (Lưu ý: chỉ cho phép thay đổi trạng thái theo loại thiết bị)

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

  let deviceTile = document.createElement('th');
  deviceTile.innerText = 'Loại Thiết bị';
  titles.appendChild(deviceTile);

  // let fromTile = document.createElement('th');
  // fromTile.innerText = 'Loại';
  // titles.appendChild(fromTile);

  let statusTile = document.createElement('th');
  statusTile.innerText = 'Trạng thái';
  titles.appendChild(statusTile);

  let ownerTile = document.createElement('th');
  ownerTile.innerText = 'chủ thiết bị';
  titles.appendChild(ownerTile);
  table.appendChild(titles);

  let noteTitle = document.createElement('th');
  noteTitle.innerText = 'Ghi chú';
  titles.appendChild(noteTitle);
  table.appendChild(titles);

  let actTitle = document.createElement('th');
  actTitle.innerText = 'Thao tác';
  titles.appendChild(actTitle);
  table.appendChild(titles);

  devices.forEach((act, i) => {
    let user = users.find(u => {
      return u.id == act.userId;
    })
    let deviceType = deviceTypes.find(deviceType => {
      return deviceType.id == dev.deviceTypeId;
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
    col3.innerText = deviceType.name;
    row.appendChild(col3);

    let col4 = document.createElement('td');
    col4.innerText = act.owner;
    row.appendChild(col4);

    let col5 = document.createElement('td');
    col5.innerText = act.to;
    row.appendChild(col5);


    let col6 = document.createElement('td');
    col6.innerText = act.note || '';
    row.appendChild(col6);

    let col7 = document.createElement('td');
    col7.innerHTML = `<button onclick="onEdit(${i})">Edit</button>
    <button onclick="onDelete(${i})">Delete</button>`;
    row.appendChild(col7);
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

// let liftSelect = document.getElementById('liftSelect')
// liftSelect.addEventListener('change', (ev) => {
//   newAct.liftId = +ev.target.value;
// })
// lifts.forEach(lift => {
//   let opt = document.createElement('option');
//   opt.value = lift.id;
//   opt.innerText = lift.name;
//   liftSelect.appendChild(opt);
// })

onNameChange = (ev) => {
  newAct.userId = +ev.target.value;
}
let ownerInput = document.getElementById('ownerInput');
ownerInput.addEventListener('keyup', (ev) => {
  newDev.owner = +ev.target.value;
})

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
  newAct.id = Math.random() * 1000;
  newAct.time = (new Date()).getTime();
  actions.push(newAct);
  render();
  resetForm();
  window.localStorage.setItem('data', JSON.stringify(actions));
}

resetForm = () => {
  newAct = {};
  selectedAction = {};
  let nameSelect = document.getElementById('nameSelect');
  let deviceStatueSelect = document.getElementById('deviceStatueSelect');
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
  window.localStorage.setItem('data', JSON.stringify(actions))
}

onCacel = () => {
  resetForm();
}

onDelete = (actIndex) => {
  if (confirm('Bạn có chắc muốn xóa dòng này chứ?')) {
    actions.splice(actIndex, 1);
    render();
    window.localStorage.setItem('data', JSON.stringify(actions))
  }
}

// actions = JSON.parse(window.localStorage.getItem('data'))
render();
