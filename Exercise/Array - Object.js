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
        owner: 4 // User Id; Id chủ sở hữu thiết bị
    },
]

// Yêu cầu: 
// Todo:
//  - Hiển thị danh sách tất cả user trong hệ thống, bao gồm quyền của người dùng đó (hiển thị thành bảng)
//  - Khi nhấn vào mỗi dòng trong bảng, hiển thị chi tiết các thiết bị mà người dùng sở hữu (hiển thị thành bảng)
//  - Khi nhấn vào mỗi thiết bị, cho phép thay đổi trạng thái của thiết bị đó (Lưu ý: chỉ cho phép thay đổi trạng thái theo loại thiết bị)

// let container = document.getElementById('container');
// function render() {
//     let table = document.createElement('table');
//     table.setAttribute('border', '3');
    
//     let titles = document.createElement('tr');
        
//     // tình trạng
//     let noTitles = document.createElement('th');
//     noTitles.innerText = 'STT';
//     titles.appendChild(noTitles);
  
//     // tên người dùng
//     let userNameTitle = document.createElement('th');
//     userNameTitle.innerText = 'User name';
//     titles.appendChild(userNameTitle);

//     //cấp bậc người dùng
//     let roleTitle = document.createElement('th');
//     roleTitle.innerText = 'Level';
//     titles.appendChild(roleTitle);


    
//     table.appendChild(titles);
//     container.appendChild(table);

//     users.forEach((user, i) => {
//         let role = roles.find(u => {
           
//             return u.id == user.roleId;
            
//         })

//         let device = devices.find(d => {
//             return d.owner == user.id
//         })

       

       

//         let row = document.createElement('tr');

//         let col1 = document.createElement('td');
//         col1.innerText = i + 1;
//         row.appendChild(col1);
        
//         let col2 = document.createElement('td')
//         col2.innerText = user.name;
//         row.appendChild(col2)

//         let col3 = document.createElement('td');
//         col3.innerText = role.name
//         row.appendChild(col3)

        
//         document.getElementById("demo").onclick = function() {myClick()};
//         function myClick() {
//             let nameDevice = document.createElement('th');
//             nameDevice.innerText = 'Name device'
//             titles.appendChild(nameDevice);
//             col4 = document.createElement('td');
//             col4.innerText = 'none '
//             row.appendChild(col4)
        
//             let descriptionDevice = document.createElement('th');
//             descriptionDevice.innerText = 'Description'
//             titles.appendChild(descriptionDevice)
//         }
   
        
//         table.appendChild(row);
//     })

    
    

// }
// render();


let container = document.getElementById('container');
function render() {
    container.innerHTML = null;
    let table = document.createElement('table');
    table.setAttribute('border', '2');
   
    
    
    
    let titles = document.createElement('tr');

    let noTitle = document.createElement('th');
    noTitle.innerText = 'STT';
    titles.appendChild(noTitle);

    let userNameTitle = document.createElement('th');
    userNameTitle.innerText = 'User name';
    titles.appendChild(userNameTitle);

    let roleTitle = document.createElement('th')
    roleTitle.innerText = 'Level';
    titles.appendChild(roleTitle);

    let descriptionDevice = document.createElement('th');
    descriptionDevice.innerText = 'Room Detail';
    titles.appendChild(descriptionDevice);

    let diviceTitle = document.createElement('th');
    diviceTitle.innerText = 'Device type'
    titles.appendChild(diviceTitle);

    let statusTile = document.createElement('th');
    statusTile.innerText = 'status device';
    titles.appendChild(statusTile);

    let ownerTitle = document.createElement('th');
    ownerTitle.innerText = 'owner device';
    titles.appendChild(ownerTitle);

    let noteTitle = document.createElement('th');
    noteTitle.innerText = 'Note'
    titles.appendChild(noteTitle)


    let devTitle = document.createElement('th');
    devTitle.innerText = 'operation';
    titles.appendChild(devTitle);

    table.appendChild(titles);

    users.forEach((user, i) => {
                let role = roles.find(u => {
                   
                    return u.id == user.roleId;
                    
                })
        
                let device = devices.find(d => {
                    return d.owner == user.id
                })

                let deviceType = deviceTypes.find(deviceType => {
                    return deviceType.id = device.deviceType
                })
                
                console.log(deviceType)
                
                let row = document.createElement('tr');

                let col1 = document.createElement('td');
            col1.innerText = i + 1;
            row.appendChild(col1);

          let col2 = document.createElement('td');
                col2.innerText = user.name;
                row.appendChild(col2);
    
                let col3 = document.createElement('td');
                col3.innerText = role.name;
                row.appendChild(col3);
                table.appendChild(row)

                let col4 = document.createElement('td');
                col4.innerText = device.name
                row.appendChild(col4);

                let col5 = document.createElement('td')
                col5.innerText = deviceType.name
                row.appendChild(col5);


                table.appendChild(row);
    
                
            })
    

    devices.forEach((dev, i) => {
        // let user = users.find(u => {
        //     return u.id == dev.owner
        // })

        // let role = roles.find(r => {
        //     return r.id = dev.owner
        // })

        let deviceStatue = deviceStatues.find(deviceStatue => {
            return deviceStatue.id == dev.status
        })

        // let deviceType = deviceTypes.find(deviceType => {
        //     return deviceType.id == dev.deviceType;
        //   })

        //   let row = document.createElement('tr');

          

          

          

            
            

            // let col4 = document.createElement('td');
    // col4.innerText = dev.name;
    // row.appendChild(col4);

    // let col5 = document.createElement('td');
    // col5.innerText = deviceType.name;
    // row.appendChild(col5);


    // let col6 = document.createElement('td');
    // col6.innerText = deviceStatue.name;
    // row.appendChild(col6);

    // let col7 = document.createElement('td');
    // col7.innerText = dev.owner;
    // row.appendChild(col7);


    // let col8 = document.createElement('td');
    // col8.innerText = dev.note || '';
    // row.appendChild(col8)

    // let col9 = document.createElement('td');
    // col9.innerHTML = `<button onclick="onEdit(${i})">Edit</button>
    // <button onclick="onDelete(${i})">Delete</button>`;
        // row.appendChild(col9);
       


    });

    
    container.appendChild(table);

}

let nameSelect = document.getElementById('nameSelect');
users.forEach(user => {
    let opt = document.createElement('option')
    opt.value = user.id
    opt.innerText = user.name;
    nameSelect.appendChild(opt);
})

let roleSelect = document.getElementById('roleSelect');
roleSelect.addEventListener('change', (ev) => {
    newDev.roleId = ev.target.value;
  }) // ko hiểu đoạn này lắm 

  roles.forEach(role => {
    let opt = document.createElement('option');
    opt.value = role.id;
    opt.innerText = role.name;
    roleSelect.appendChild(opt);
  })

//   let deviceStatueSelect = document.getElementById('deviceStatueSelect')
//   deviceStatueSelect.addEventListener('change', (ev) => {
//     newDev.deviceStatueId = +ev.target.value;
//   })
//   deviceStatues.forEach(deviceStatue => {
//     let opt = document.createElement('option');
//     opt.value = deviceStatue.id;
//     opt.innerText = deviceStatue.name;
//     deviceStatueSelect.appendChild(opt);
//   })
//   let deviceTypeSelect = document.getElementById('deviceTypeSelect')
//   deviceTypeSelect.addEventListener('change', (ev) => {
//     newDev.deviceTypeId = +ev.target.value;
//   })
//   deviceTypes.forEach(deviceType => {
//     let opt = document.createElement('option');
//     opt.value = deviceType.id;
//     opt.innerText = deviceType.name;
//     deviceTypeSelect.appendChild(opt);
//   })

onNameChange = (ev) => {
    newDev.userId = +ev.target.value;
}

// let statusInput = document.getElementById('statusInput');
// statusInput.addEventListener('keyup', (ev) => {
//     newDev.status = +ev.target.value;
// });

// let ownerInput = document.getElementById('ownerInput');
// ownerInput.addEventListener('keyup', (ev) => {
//     newDev.owner = +ev.target.value;
// });

// let noteInput = document.getElementById('noteInput')
// noteInput.addEventListener('keyup', (ev) => {
//     newDev.note = ev.target.value;
// });

onCreate = () => {
    newDev.id = Math.random() * 1000;
    devices.push(newDev);
    render();
    resetForm();
}

resetForm = () => {
    newDev = {

    };

    selectedDevice = {

    }


    let nameSelect = document.getElementById('nameSelect');
    let roleSelect = document.getElementById('roleSelect');
    let deviceStatueSelect = document.getElementById('deviceStatueSelect');
    let deviceTypeSelect = document.getElementById('deviceTypeSelect');
    let statusInput = document.getElementById('statusInput');
    let ownerInput = document.getElementById('ownerInput');
    let noteInput = document.getElementById('noteInput');
  
    let btnAdd = document.getElementById('btnAdd');
    let btnEdit = document.getElementById('btnEdit');
    let btnCancel = document.getElementById('btnCancel');
    
     btnAdd.classList.remove('hide');
     btnEdit.classList.add('hide');
    btnCancel.classList.add('hide');
    nameSelect.value = '';
    roleSelect.value = '';
    deviceStatueSelect.value = '';
    deviceTypeSelect.value = '';
    statusInput.value = null;
    ownerInput.value = null;
    noteInput.value = '';


    onEdit = (devIndex) => {
        selectedDevice = devices[devIndex];
        let nameSelect = document.getElementById('nameSelect');
        let roleSelect = document.getElementById('roleSelect');
        let deviceStatueSelect = document.getElementById('deviceStatueSelect');
        let deviceTypeSelect = document.getElementById('deviceTypeSelect');
        let statusInput = document.getElementById('statusInput');
        let ownerInput = document.getElementById('ownerInput');
        let noteInput = document.getElementById('noteInput');
      
        let btnAdd = document.getElementById('btnAdd');
        let btnEdit = document.getElementById('btnEdit');
        let btnCancel = document.getElementById('btnCancel');
        btnAdd.classList.add('hide');
        btnEdit.classList.remove('hide');
        btnCancel.classList.remove('hide');
        nameSelect.value = selectedDevice.userId
        roleSelect.value = selectedDevice.roleId
        deviceStatueSelect.value = selectedDevice.deviceStatueId
        deviceTypeSelect.value = selectedDevice.deviceTypeId
        statusInput.value = selectedDevice.status
        ownerInput.value = selectedDevice.owner
        noteInput.value = selectedDevice.note || '';
      }
      onSave = () => {
        let nameSelect = document.getElementById('nameSelect');
        let liftSelect = document.getElementById('liftSelect');
        let fromInput = document.getElementById('fromInput');
        let toInput = document.getElementById('toInput');
        let noteInput = document.getElementById('noteInput');
        selectedDevice.userId = nameSelect.value;
        selectedDevice.liftId = liftSelect.value;
        selectedDevice.from = fromInput.value;
        selectedDevice.to = toInput.value;
        selectedDevice.note = noteInput.value;
        render();
        resetForm();
        
      }
      
      onCacel = () => {
        resetForm();
      }
      
      onDelete = (devIndex) => {
        if (confirm('Bạn có chắc muốn xóa dòng này chứ?')) {
          devices.splice(devIndex, 1);
          render();
          
        }
      }
      

    
}


render()

    

  
   