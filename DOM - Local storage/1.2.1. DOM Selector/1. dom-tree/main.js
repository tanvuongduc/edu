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
        note: 'a',
    },
    {
        id: 2,
        userId: 2,
        liftId: 2,
        from: 2,
        to: 10,
        time: new Date(2022, 3, 5).getTime(),
        note: 'a',
    },
    {
        id: 3,
        userId: 3,
        liftId: 3,
        from: 3,
        to: 10,
        time: new Date(2021, 9, 10).getTime(),
        note: 'a',
    },
    {
        id: 4,
        userId: 4,
        liftId: 4,
        from: 4,
        to: 10,
        time: new Date(2023, 1, 20).getTime(),
        note: 'a',
    },
    {
        id: 5,
        userId: 1,
        liftId: 2,
        from: 5,
        to: 10,
        time: new Date(2023, 1, 20).getTime(),
        note: 'a',
    },
    {
        id: 6,
        userId: 2,
        liftId: 3,
        from: 6,
        to: 10,
        time: new Date(2019, 1, 22).getTime(),
        note: 'a',
    },
    {
        id: 7,
        userId: 3,
        liftId: 4,
        from: 7,
        to: 10,
        time: new Date(2023, 1, 28).getTime(),
        note: 'a',
    },
];

let container = document.getElementById("container");
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

        // let p = document.createElement('li');
        // p.innerText = `Người dùng: ${user.name}`;
        // container.appendChild(p)
        const tbl = document.getElementById("tbl");
        const tblBody = document.createElement("tbody");

        // BTVN tạo bảng hiển thị thông tin
        // creating all cells
        // creates a table row
        const row = document.createElement("tr");

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        // const cell1 = document.createElement("td");
        // const cellText1 = document.createTextNode(`${user.name}`);
        // cell1.appendChild(cellText1);
        // row.appendChild(cell1);

        // // add the row to the end of the table body
        // tblBody.appendChild(row);

        // const cell2 = document.createElement("td");
        // const cellText2 = document.createTextNode(`${lift ? lift.name : ''}`);
        // cell2.appendChild(cellText2);
        // row.appendChild(cell2);

        // // add the row to the end of the table body
        // tblBody.appendChild(row);

        const cell3 = document.createElement("td");
        const cellText3 = document.createTextNode(`${act.from}`);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);

        // add the row to the end of the table body
        tblBody.appendChild(row);

        const cell4 = document.createElement("td");
        const cellText4 = document.createTextNode(`${act.to}`);
        cell4.appendChild(cellText4);
        row.appendChild(cell4);

        // add the row to the end of the table body
        tblBody.appendChild(row);

        const cell5 = document.createElement("td");
        const cellText5 = document.createTextNode(`${new Date(act.time).getFullYear()}-${new Date(act.time).getMonth() + 1}-${new Date(act.time).getDate()} ${new Date(act.time).getHours()} : ${new Date(act.time).getMinutes()}`);
        cell5.appendChild(cellText5);
        row.appendChild(cell5);

        // add the row to the end of the table body
        tblBody.appendChild(row);

        const cell6 = document.createElement("td");
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");
        const cellText6 = document.createTextNode(`Chi tiết`);
        const cellText7 = document.createTextNode(`Xóa`);

        btn1.addEventListener("click", () => {
            document.getElementById("text").innerHTML = `Tên người dùng: ${user.name}; Tên thang máy: ${lift ? lift.name : ''}; Ghi chú: ${act.note}`;
            document.getElementById("note").innerHTML = `Sửa ghi chú: `;
            const inp = document.createElement("input");
            const btn3 = document.createElement("button");
            const btnText = document.createTextNode(` Sửa `);
            btn3.appendChild(btnText);
            document.getElementById("note").appendChild(inp);
            document.getElementById("note").appendChild(btn3);
        });

        btn2.addEventListener("click", () => {
            confirm("Bạn muốn xóa thông tin này chứ?");
        });

        btn1.appendChild(cellText6);
        btn2.appendChild(cellText7);
        cell6.appendChild(btn1);
        cell6.appendChild(btn2);
        row.appendChild(cell6);

        // add the row to the end of the table body
        tblBody.appendChild(row);
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.body.appendChild(tbl);
        // sets the border attribute of tbl to '2'
        tbl.setAttribute("border", "2");
    })

// console.log('aaaaaaaaaaaaaaaaaaaaaaa', result);
// thêm nút hiển thị người dùng + tên thang máy + ô input note
=======
  .filter((act) => {
    console.log("aaaaaaaaaaa", act);
    // let actYear = new Date(act.time).getFullYear();
    // return actYear >= 2023;
    let start2023 = new Date(2023, 0, 1).getTime();
    return act.time >= start2023;
  })
  .sort((a, b) => {
    if (a.time < b.time) return -1;
    else return 1;
  })
  .forEach((act) => {
    let user = users.find((u) => u.id == act.userId);
    let lift = lifts.find((l) => l.id == act.liftId);
    // console.log('111111111111111111', user);
    // act.userId
    //     return `
    // <p>Người dùng: ${user.name}</p>
    // <p>Tên thang máy: ${lift ? lift.name : ''}</p>
    // <p>Vào tầng: ${act.from}</p>
    // <p>Ra tầng: ${act.to}</p>
    // <p>Thời gian: năm ${new Date(act.time).getFullYear()} - tháng ${new Date(act.time).getMonth() + 1} - ngày ${new Date(act.time).getDate()} ${new Date(act.time).getHours()} : ${new Date(act.time).getMinutes()} - </p>
    // `

    // let p = document.createElement('li');
    // p.innerText = `Người dùng: ${user.name}`;
    // container.appendChild(p)
    const tbl = document.getElementById("tbl");
    const tblBody = document.createElement("tbody");

    // BTVN tạo bảng hiển thị thông tin
    // creating all cells
      // creates a table row
      const row = document.createElement("tr");

      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      // const cell1 = document.createElement("td");
      // const cellText1 = document.createTextNode(`${user.name}`);
      // cell1.appendChild(cellText1);
      // row.appendChild(cell1);

      // add the row to the end of the table body
      //tblBody.appendChild(row);

      // const cell2 = document.createElement("td");
      // const cellText2 = document.createTextNode(`${lift ? lift.name : ""}`);
      // cell2.appendChild(cellText2);
      // row.appendChild(cell2);

      // add the row to the end of the table body
      tblBody.appendChild(row);

      const cell3 = document.createElement("td");
      const cellText3 = document.createTextNode(`${act.from}`);
      cell3.appendChild(cellText3);
      row.appendChild(cell3);

      // add the row to the end of the table body
      tblBody.appendChild(row);

      const cell4 = document.createElement("td");
      const cellText4 = document.createTextNode(`${act.to}`);
      cell4.appendChild(cellText4);
      row.appendChild(cell4);

      // add the row to the end of the table body
      tblBody.appendChild(row);

      const cell5 = document.createElement("td");
      const cellText5 = document.createTextNode(
        `${new Date(act.time).getFullYear()}-${
          new Date(act.time).getMonth() + 1
        }-${new Date(act.time).getDate()} ${new Date(
          act.time
        ).getHours()} : ${new Date(act.time).getMinutes()}`
      );
      cell5.appendChild(cellText5);
      row.appendChild(cell5);

      // add the row to the end of the table body
      tblBody.appendChild(row);
  

    const cell6 = document.createElement("td");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const cellText6 = document.createTextNode(`Chi tiết`);
    const cellText7 = document.createTextNode(`Xóa`);

    btn1.addEventListener("click", () => {
      document.getElementById("text").innerHTML = `Tên người dùng: ${
        user.name
      }; Tên thang máy: ${lift ? lift.name : ""}; Ghi chú: ${act.note}`;
      document.getElementById("note").innerHTML = `Sửa ghi chú: `;
      const inp = document.createElement("input");
      const btn3 = document.createElement("button");
      const btnText = document.createTextNode(` Sửa `);
      btn3.appendChild(btnText);
      document.getElementById("note").appendChild(inp);
      document.getElementById("note").appendChild(btn3);
    });

    btn2.addEventListener("click", () => {
      confirm("Bạn muốn xóa thông tin này chứ?");
    });

    btn1.appendChild(cellText6);
    btn2.appendChild(cellText7);
    cell6.appendChild(btn1);
    cell6.appendChild(btn2);
    row.appendChild(cell6);

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  });
};



// console.log('aaaaaaaaaaaaaaaaaaaaaaa', result);
