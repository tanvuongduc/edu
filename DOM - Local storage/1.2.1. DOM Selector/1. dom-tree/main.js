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
            <th class="width-30">ID</th>
            <th class="width-70">Vào tầng</th>
            <th class="width-70">Ra tầng</th>
            <th class="width-100">Thời gian</th>
            <th class="width-280">Tùy chọn</th>
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
              <button id="btn-detail" class="custom-btn btn-9" onclick="addDetail(${
                a.id
              })">Detail</button> ||
              <button id="btn-delete" class="custom-btn btn-13" onclick="deleteRow(${
                a.id
              })">Delete</button>
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
                ngày ${new Date(val.time).getDate()} - 
                giờ ${new Date(val.time).getHours()}:${new Date(
      val.time
    ).getMinutes()}
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
  let list = ``;
  if (val == 1) {
    list += `<tr>
        <td>
          <p>id: <label id="iddemo"></label> <button onclick="getID(${val})">Get ID</button></p>
          <p>name: <input type="text" id="liftName"/></p>
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
            <option value="false">Nữ</option>
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
          <p>time: 
            <input type="datetime-local" name="time" id="time" />
          </p>
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

function addDetail(actionId) {
  console.log(actionId);
  let action = actions.find((a, i) => {
    return a.id == actionId;
  });
  console.log(action);
  if ((listDetail.length = 0)) {
    listDetail.unshift(action);
    renderDetail();
  } else {
    listDetail.pop();
    listDetail.unshift(action);
    renderDetail();
  }
  console.log(listDetail);
  // by index
  // if ((listDetail.length = 0)) {
  //   listDetail.unshift(actions[i]);
  //   renderDetail();
  // } else {
  //   listDetail.pop();
  //   listDetail.unshift(actions[i]);
  //   renderDetail();
  // }
}

function addNote(i) {
  let Note = document.getElementById("Note").value;
  if (Note) {
    listDetail[i].note = Note;
  }
  document.getElementById("Note").value = "";
  renderDetail();
}

function clearList(i) {
  listDetail.pop();
  renderDetail();
}

function deleteRow(actionId) {
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
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      renderAddInfo(options[i].value);
    }
  }
}

function getID(val) {
  let loadId = Math.floor(Math.random() * 100);
  // let loadId = 1;
  if (val == 1) {
    lifts.map((value, i) => {
      if (loadId !== value.id) {
        console.log(loadId);
        return loadId;
      } else {
        console.log(loadId);
        return (loadId = "ID " + `${loadId}` + " đã tồn tại!!!");
      }
    });
  }
  if (val == 2) {
    users.map((value, i) => {
      loadId !== value.id
        ? loadId
        : (loadId = "ID " + `${loadId}` + " đã tồn tại!!!");
      console.log(loadId);
    });
  }
  if (val == 3) {
    actions.map((value, i) => {
      loadId !== value.id
        ? loadId
        : (loadId = "ID " + `${loadId}` + " đã tồn tại!!!");
      console.log(loadId);
    });
  }
  document.getElementById("iddemo").innerHTML = loadId;
}

function selectedStatus(obj) {
  var options = obj.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      return options[i].value;
    }
  }
}

function selectedGender(obj) {
  var options = obj.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      return options[i].value;
    }
  }
}

function selectedUserId(obj) {
  var options = obj.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      return options[i].value;
    }
  }
}

function selectedLiftId(obj) {
  var options = obj.children;
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      return options[i].value;
    }
  }
}

function addLift() {
  let newLift = {};
  if (
    document.getElementById("iddemo").innerHTML !== "" &&
    document.getElementById("liftName").value !== ""
  ) {
    newLift = {
      id: document.getElementById("iddemo").innerHTML,
      name: document.getElementById("liftName").value,
      status: document.getElementById("selectStatus").value,
      currentFloor: document.getElementById("liftCurrentFloor").value,
    };
    console.log(lifts);
    lifts.push(newLift);
    console.log(lifts);
    clearLift();
  } else {
    alert("Thieu thong tin!!!");
  }
}

function addUser() {
  let newUser = {};
  if (
    document.getElementById("iddemo").innerHTML !== "" &&
    document.getElementById("userName").value !== ""
  ) {
    newUser = {
      id: document.getElementById("iddemo").innerHTML,
      name: document.getElementById("userName").value,
      gender: document.getElementById("selectGender").value,
    };
    console.log(users);
    users.push(newUser);
    console.log(users);
    clearUser();
  } else {
    alert("Thieu thong tin!!!");
  }
}

function addAction() {
  let newAction = {};

  if (
    document.getElementById("iddemo").innerHTML !== "" &&
    document.getElementById("selectUserId").value !== "" &&
    document.getElementById("selectLiftId").value !== ""
  ) {
    newAction = {
      id: document.getElementById("iddemo").innerHTML,
      userId: document.getElementById("selectUserId").value,
      liftId: document.getElementById("selectLiftId").value,
      from: document.getElementById("from").value,
      to: document.getElementById("to").value,
      time: document.getElementById("time").value,
      note: document.getElementById("note").value,
    };
    if (newAction.time == "") {
      newAction.time =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        "/" +
        new Date().getHours() +
        ":" +
        new Date().getMinutes();
    }
    actions.push(newAction);
    render();
    clearAction();
  } else {
    alert("Thiếu thông tin!!!");
  }
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

// switcher JS
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

function filterByTime() {
  const arrTime = document.getElementsByClassName("fil-time");
  let list = `<tr>
            <th class="width-30">ID</th>
            <th class="width-70">Vào tầng</th>
            <th class="width-70">Ra tầng</th>
            <th class="width-100">Thời gian</th>
            <th class="width-280">Tùy chọn</th>
        </tr>`;
  for (let i = 0; i < arrTime.length; i++) {
    if (arrTime[i].checked) {
      let action = actions.filter((a) => {
        let time = new Date(a.time).getFullYear();
        return time >= arrTime[i].value;
      });
      action.map((a, i) => {
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
                  <button id="btn-detail" class="custom-btn btn-9" onclick="addDetail(${
                    a.id
                  })">Detail</button> ||
                  <button id="btn-delete" class="custom-btn btn-13" onclick="deleteRow(${
                    a.id
                  })">Delete</button>
                </td>
              </tr>`;
      });
    }
  }
  document.getElementById("table").innerHTML = list;
}

function filterByStatus() {
  const arrStatus = document.getElementsByClassName("fil-status");
  let list = `<tr>
            <th class="width-30">ID</th>
            <th class="width-70">Vào tầng</th>
            <th class="width-70">Ra tầng</th>
            <th class="width-100">Thời gian</th>
            <th class="width-280">Tùy chọn</th>
          </tr>`;
  for (let i = 0; i < arrStatus.length; i++) {
    if (arrStatus[i].checked) {
      let action = actions.filter((a, index) => {
        let lift = lifts.find((lif) => {
          if (lif.id == a.liftId) return true; //${lift.status}
        });
        let status = lift.status;
        return status.toString() == arrStatus[i].value;
      });
      action.map((a, index) => {
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
                  <button id="btn-detail" class="custom-btn btn-9" onclick="addDetail(${
                    a.id
                  })">Detail</button> ||
                  <button id="btn-delete" class="custom-btn btn-13" onclick="deleteRow(${
                    a.id
                  })">Delete</button>
                </td>
              </tr>`;
      });
    }
  }
  document.getElementById("table").innerHTML = list;
}
