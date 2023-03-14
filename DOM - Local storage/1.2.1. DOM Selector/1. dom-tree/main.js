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
    note: "",
  },
  {
    id: 2,
    userId: 2,
    liftId: 2,
    from: 2,
    to: 10,
    time: new Date(2022, 3, 5).getTime(),
    note: "",
  },
  {
    id: 3,
    userId: 3,
    liftId: 3,
    from: 3,
    to: 10,
    time: new Date(2021, 9, 10).getTime(),
    note: "",
  },
  {
    id: 4,
    userId: 4,
    liftId: 4,
    from: 4,
    to: 10,
    time: new Date(2023, 1, 20).getTime(),
    note: "",
  },
  {
    id: 5,
    userId: 1,
    liftId: 2,
    from: 5,
    to: 10,
    time: new Date(2023, 1, 20).getTime(),
    note: "",
  },
  {
    id: 6,
    userId: 2,
    liftId: 3,
    from: 6,
    to: 10,
    time: new Date(2019, 1, 22).getTime(),
    note: "",
  },
  {
    id: 7,
    userId: 3,
    liftId: 4,
    from: 7,
    to: 10,
    time: new Date(2023, 1, 28).getTime(),
    note: "",
  },
];

const listDetail = [];

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
              ${new Date(a.time).getMonth() + 1} -
              ${new Date(a.time).getDate()}
          </td>
            <td>
              <button id="btn-detail" onclick="addDetail(${i})">Detail</button>
              <button id="btn-delete" onclick="deleteRow(${i})">Delete</button>
            </td>
          </tr>`;
  });
  document.getElementById("table").innerHTML = list;
}
render();

function renderDetail() {
  let list = ``;
  listDetail.map((val, i) => {
    let user = users.find((u) => {
      if (u.id == val.userId) return true; //${user.name}
    });
    let lift = lifts.find((lif) => {
      if (lif.id == val.liftId) return true; //${lift.name}
    });
    list = `<tr>
            <td>
              <p>Người dùng: ${user.name}</p>
              <p>Tên thang máy: ${lift ? lift.name : ""}</p>
              <p>Vào tầng: ${val.from}</p>
              <p>Ra tầng: ${val.to}</p>
              <p>Thời gian: năm ${new Date(val.time).getFullYear()} -
                tháng ${new Date(val.time).getMonth() + 1} -
                ngày ${new Date(val.time).getDate()}
              </p>
              <p>Ghi chú:  ${val.note ? val.note : ""}</p>
              <p>
                Ghi chú:
                <input type="text" id="Note" />
                <button id="btn-add-note" onclick="addNote(${i})">Note</button>
              </p>
              <p><button id="btn-delete-list" onclick="clearList(${i})">Clear</button></p>
            </td>
            </tr>`;
  });
  document.getElementById("tableDetail").innerHTML = list;
}

function renderAddInfo(val) {
  var list = ``;
  if (val == 1) {
    list += `<tr>
        <td>
          <p>id: <label id="iddemo"></label> <button onclick="getID(${val})">Get ID</button></p>
          <p>name: <input type="text" id="liftName" /></p>
          <p>status: 
          <select
            name="selectStatus"
            id="selectStatus"
            onchange="selectedStatus(this)"
          >
            <option value="" >-- Chọn trạng thái --</option>
            <option value="true" >true</option>
            <option value="false">false</option>
          </select>
          </p>
          <p>currentFloor: <input type="text" id="liftCurrentFloor"/></p>
          <p>
            <button id="btn-add-lift" onclick="addLift()">Add Lift</button> || 
            <button id="btn-delete-lift" onclick="clearLift()">Clear</button>
          </p>
        </td>
        </tr>`;
  } else if (val == 2) {
    list += `<tr>
        <td>
          <p>id: <label id="iddemo"></label> <button onclick="getID(${val})">Get ID</button></p>
          <p>name: <input type="text" id="userName" /></p>
          <p>gender: 
          <select
            name="selectGender"
            id="selectGender"
            onchange="selectedGender(this)"
          >
            <option value="" >-- Chọn giới tính --</option>
            <option value="true" >Nam</option>
            <option value="false">Nu</option>
          </select>
          </p>
          <p>
            <button id="btn-add-lift" onclick="addUser()">Add User</button> ||
            <button id="btn-delete-lift" onclick="clearUser()">Clear</button>
          </p>
        </td>
        </tr>`;
  } else if (val == 3) {
    list += `<tr>
        <td>
          <p>id: <label id="iddemo"></label> <button onclick="getID(${val})">Get ID</button></p>
          <p>userId: 
          <select
            name="selectUserId"
            id="selectUserId"
            onchange="selectedUserId(this)"
          >
            <option value="" >-- Chọn user --</option>
            ${users.map((u, i) => {
              return `<option value="${u.id}" >${u.id} - ${u.name}</option>`;
            })}
          </select>
          </p>
          <p>liftId: 
          <select
            name="selectLiftId"
            id="selectLiftId"
            onchange="selectedLiftId(this)"
          >
          <option value="" >-- Chọn lift --</option>
          ${lifts.map((l, i) => {
            return `<option value="${l.id}" >${l.id} - ${l.name}</option>`;
          })}
          </select>
          </p>
          <p>from: <input type="text" id="from" /></p>
          <p>to: <input type="text" id="to" /></p>
          <p>time: <label id="time"></label> <button onclick="getTime()">Get Time</button></p>
          <p>note: <input type="text" id="note" /></p>
          <p>
            <button id="btn-add-lift" onclick="addAction()">Add Action</button> || 
            <button id="btn-delete-lift" onclick="clearAction()">Clear</button>
          </p>
        </td>
        </tr>`;
  }
  document.getElementById("addInfo").innerHTML = list;
}

function addDetail(i) {
  if ((listDetail.length = 0)) {
    listDetail.unshift(actions[i]);
    renderDetail();
  } else {
    listDetail.pop();
    listDetail.unshift(actions[i]);
    renderDetail();
  }
}

function addNote(i) {
  let Note = document.getElementById("Note").value;
  if (Note) {
    listDetail[i].note = Note;
    console.log((listDetail[i].note = Note));
  }
  document.getElementById("Note").value = "";
  renderDetail();
}

function clearList(i) {
  listDetail.pop();
  renderDetail();
}

function deleteRow(i) {
  actions.splice(i, 1);
  render();
  // if (listDetail.length > 0) {
  //   listDetail.map((val, index) => {
  //     if (val.id == i) {
  //       listDetail.splice(index, 1);
  //     }
  //   });
  //   renderDetail();
  // }
}

function validateSelectBox(obj) {
  var options = obj.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      renderAddInfo(options[i].value);
    }
  }
}

function getID(val) {
  if (val == 1) {
    lifts.map((value, i) => {
      if (Math.floor(Math.random() * 100) !== value.id) {
        // console.log(Math.random() * 100 !== value.id);
        return true;
      }
    });
  } else if (val == 2) {
    users.map((value, i) => {
      if (Math.floor(Math.random() * 100) !== value.id) {
        // console.log(Math.random() * 100 !== value.id);
        return true;
      }
    });
  } else if (val == 3) {
    actions.map((value, i) => {
      if (Math.floor(Math.random() * 100) !== value.id) {
        // console.log(Math.random() * 100 !== value.id);
        return true;
      }
    });
  }
  document.getElementById("iddemo").innerHTML = Math.floor(Math.random() * 100);
}

function getTime() {
  var time =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  document.getElementById("time").innerHTML = time;
}

function selectedStatus(obj) {
  var options = obj.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      console.log(options[i].value);
      return options[i].value;
    }
  }
}

function selectedGender(obj) {
  var options = obj.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      console.log(options[i].value);
      return options[i].value;
    }
  }
}

function selectedUserId(obj) {
  var options = obj.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      // console.log(options[i].value);
      return options[i].value;
    }
  }
}

function selectedLiftId(obj) {
  var options = obj.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      // console.log(options[i].value);
      return options[i].value;
    }
  }
}

function addLift() {
  var newLift = {
    id: document.getElementById("iddemo").innerHTML,
    name: document.getElementById("liftName").value,
    status: document.getElementById("selectStatus").value,
    currentFloor: document.getElementById("liftCurrentFloor").value,
  };
  console.log(lifts)
  lifts.push(newLift);
  console.log(lifts)
  clearLift();
}

function addUser() {
  var newUser = {
    id: document.getElementById("iddemo").innerHTML,
    name: document.getElementById("userName").value,
    gender: document.getElementById("selectGender").value,
  };
  console.log(users)
  users.push(newUser);
  console.log(users)
  clearUser();
}

function addAction() {
  var newAction = {
    id: document.getElementById("iddemo").innerHTML,
    userId: document.getElementById("selectUserId").value,
    liftId: document.getElementById("selectLiftId").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    time: document.getElementById("time").innerHTML,
    note: document.getElementById("note").value,
  };
  actions.push(newAction);
  render();
  clearAction();
}

function clearLift() {
  var newLift = {
    id: (document.getElementById("iddemo").innerHTML = ""),
    name: (document.getElementById("liftName").value = ""),
    status: (document.getElementById("selectStatus").value = ""),
    currentFloor: (document.getElementById("liftCurrentFloor").value = ""),
  };
}

function clearUser() {
  var newUser = {
    id: (document.getElementById("iddemo").innerHTML = ""),
    name: (document.getElementById("userName").value = ""),
    gender: (document.getElementById("selectGender").value = ""),
  };
}

function clearAction() {
  var newAction = {
    id: (document.getElementById("iddemo").innerHTML = ""),
    userId: (document.getElementById("selectUserId").value = ""),
    liftId: (document.getElementById("selectLiftId").value = ""),
    from: (document.getElementById("from").value = ""),
    to: (document.getElementById("to").value = ""),
    time: (document.getElementById("time").innerHTML = ""),
    note: (document.getElementById("note").value = ""),
  };
}
