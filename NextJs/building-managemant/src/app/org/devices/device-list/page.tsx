"use client";
import { useEffect, useState } from "react";
import { IUser, IRole } from "../../users/user-list/page";
import { IStatus } from "../status-list/page";
import { IType } from "../type-list/page";

import axios from "axios";

export interface IDevice {
  id?: number;
  name?: string;
  description?: string;
  deviceType?: number;
  status?: number;
  owner?: number;
  ownerName?: string;
  deviceTypeName?: string;
  statusName?: string;
}

export default function DevicesList() {
  // let _devices: IDevice[] = [
  //   {
  //     id: 1,
  //     name: "Cửa Chính p101",
  //     description: "Cửa ra vào phòng 101",
  //     deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 2, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 1, // User Id; Id chủ sở hữu thiết bị
  //   },
  //   {
  //     id: 2,
  //     name: "Cửa nhà vệ sinh p101",
  //     description: "Cửa nhà vệ sinh phòng 101",
  //     deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 3, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 1, // User Id; Id chủ sở hữu thiết bị
  //   },
  //   {
  //     id: 3,
  //     name: "Đèn 1 p.101",
  //     description: "Đèn số 1 phòng 101",
  //     deviceType: 3, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 5, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 1, // User Id; Id chủ sở hữu thiết bị
  //   },
  //   {
  //     id: 4,
  //     name: "Quạt 1 p.101",
  //     description: "Quạt số 1 phong 101",
  //     deviceType: 2, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 9, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 1, // User Id; Id chủ sở hữu thiết bị
  //   },

  //   {
  //     id: 5,
  //     name: "Cửa Chính p212",
  //     description: "Cửa ra vào phòng 212",
  //     deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 1, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 2, // User Id; Id chủ sở hữu thiết bị
  //   },

  //   {
  //     id: 6,
  //     name: "Cửa Chính p213",
  //     description: "Cửa ra vào phòng 213",
  //     deviceType: 1, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 3, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 3, // User Id; Id chủ sở hữu thiết bị
  //   },
  //   {
  //     id: 7,
  //     name: "Đèn 1 p.213",
  //     description: "Đèn số 1 phòng 213",
  //     deviceType: 3, // Device Type Id; Thiết ị thuộc loại thiết bị nào
  //     status: 4, // Trang thái; chỉ có thể có trạng thái của loại thiết bị tương ứng
  //     owner: 3, // User Id; Id chủ sở hữu thiết bị
  //   },
  // ];
  let [devices, setDevices] = useState<IDevice[]>([]);
  let [users, setUsers] = useState<IUser[]>([]);
  let [status, setStatus] = useState<IStatus[]>([]);

  let [selectedDevice, setSelectedDevice] = useState<IDevice>()


  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const resDevice = await axios.get("/api/devices"); // Replace "/api/devices" with your actual API endpoint
        setDevices(resDevice.data);
        console.log(setDevices);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const resUser = await axios.get("/api/users"); // Replace "/api/users" with your actual API endpoint
        setUsers(resUser.data);
        console.log(setUsers);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    const fetchStatus = async () => {
      try {
        const resStatus = await axios.get("/api/deviceStatus"); // Replace "/api/deviceStatus" with your actual API endpoint
        setStatus(resStatus.data);
        console.log(setStatus);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
    fetchUsers();
    fetchStatus();
  }, []);

  function onEdit(i: number) {
    setSelectedDevice(devices[i])
    window.location.replace(`/org/devices/device-detail/${devices[i].id}`)
  }

  function onDelete(i: number) {
    const deviceIdToDelete = devices[i].id;
  
    axios
      .delete(`/api/devices/${deviceIdToDelete}`) // Thay "/api/devices" bằng endpoint API 
      .then((response) => {
        console.log("deleted successfully");
        const updatedDevices = devices.filter(
          (device) => device.id !== deviceIdToDelete
        );
        setDevices(updatedDevices);
      })
      .catch((error) => {
        console.error("Error deleting device:", error);
      });
  }
  

  return (
    <div>
      <div>
        <h1>Thiết bị</h1>
        <button>Add new Devices</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Chủ sở hữu</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {devices
            .map((device) => {
              device.ownerName = users.find((u) => u.id === device.owner)?.name;
              return device;
            })
            .map((device) => {
              device.statusName = status.find(
                (s) => s.id === device.status
              )?.name;
              return device;
            })
            .map((device, i) => (
              <tr key={device.id}>
                <td>{i + 1}</td>
                <td>{device.name}</td>
                <td>{device.ownerName}</td>
                <td>{device.statusName}</td>
                <td>
                  <span>
                    <button
                      onClick={() => {
                        onEdit(i);
                      }}
                    >
                      Edit
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        onDelete(i);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
