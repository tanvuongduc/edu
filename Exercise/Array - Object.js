//yêu cầu
// hiển thị ds tất cả user trong hệ thống bao gồm quyền của người dùng đó(bảng)
// khi nhấn vào mỗi dòng trong bảng. hiển thị chi tiết các thiết bị mà người dùng sở hữu
// khi nhấn vào mỗi thiết bị, cho phép thay đổi trạng thái của thiết bị đó

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
];
let container = document.getElementById("container");

let table = document.createElement('table')
// Yêu cầu: 
// Todo:
//  - Hiển thị danh sách tất cả user trong hệ thống, bao gồm quyền của người dùng đó (hiển thị thành bảng)
//  - Khi nhấn vào mỗi dòng trong bảng, hiển thị chi tiết các thiết bị mà người dùng sở hữu (hiển thị thành bảng)
//  - Khi nhấn vào mỗi thiết bị, cho phép thay đổi trạng thái của thiết bị đó (Lưu ý: chỉ cho phép thay đổi trạng thái theo loại thiết bị)

