import React, { useEffect, useState } from "react";
import { IDeviceStatus } from "../../device-statuses/device-status-list/page";
import axios from "axios";
import { IUser } from "../../users/user-list/page";

export interface IDevice {
  id?: number;
  name?: string;
  owner?: number;
  ownerName?: string;
  deviceType: number;
  deviceTypeName?: string;
  status?: number;
  statusName?: string;
}

export default function App(props: IDevice) {
  const hasPermission = true;
  let [devices, setDevice] = useState<IDevice[]>([]);
  let [users, setUser] = useState<IUser[]>([]);
  let [deviceStatus, setDeviceStatus] = useState<IDeviceStatus[]>([]);
  let [selectedDevice, setSelectedDevice] = useState<IDevice>();

  useEffect(() => {
    if (!hasPermission) {
      window.location.replace("/");
    }

    let promiseArr = [
      axios.get(`/api/users`),
      axios.get(`/api/devicestatuses`),
      axios.get(`/api/devices`),
    ];
    // let promiseArr1 = [setRoles(), axios.get(`/api/users/${params.id}`)]

    Promise.all(promiseArr).then(([userRes, deviceStatusRes, deviceRes]) => {
      let user: IUser[] = userRes.data || {};
      setUser(user);

      let deviceStatus: IDeviceStatus[] = deviceStatusRes.data || [];
      setDeviceStatus(deviceStatus);

      let device: IDevice[] = deviceRes.data || {};
      setDevice(device);
    });
  }, []);

  function onEdit(i: number) {
    setSelectedDevice(devices[i]);
    // window.localStorage.setItem('selectedUser', users[i].id.toString())
    window.location.replace(`/org/device/device-detail/${devices[i].id}`);
  }

  function onDelete(i: number) {
    devices.splice(i, 1);
    axios
      .delete(`/api/devices/`)
      .then((response) => {
        // Handle successful deletion
        console.log("Item deleted successfully");
        // Perform any necessary state updates or additional actions
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting item:", error);
        // Perform any necessary error handling or display error messages
      });
  }

  return (
    <div>
      <div>
        <div>
          <h1>User List</h1>
          <button>Add new device</button>
        </div>

        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {devices
            .map((d) => {
              d.ownerName = users.find((u) => u.name === d.owner)?.name;
              return d;
            })
            .map((d) => {
              d.statusName = deviceStatus.find(
                (ds) => ds.name === d.status
              )?.name;
              return d;
            })
            .map((d, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.ownerName}</td>
                  <td>{d.statusName}</td>
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
              );
            })}
        </table>
      </div>
    </div>
  );
}
