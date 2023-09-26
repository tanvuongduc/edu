import React, { useEffect, useState } from "react";
import { IDeviceStatus } from "../../device-statuses/device-status-list/page";
import axios from "axios";

export interface IDeviceTypes {
  id?: number;
  name?: string;
  description?: string;
  status?: string[];
}

export default function App(props: IDeviceTypes) {
  const hasPermission = true;
  let [deviceTypes, setDeviceTypes] = useState<IDeviceTypes[]>([]);
  let [deviceStatus, setDeviceStatus] = useState<IDeviceStatus[]>([]);
  let [selectedType, setSelectedType] = useState<IDeviceTypes>();

  useEffect(() => {
    if (!hasPermission) {
      window.location.replace("/");
    }

    let promiseArr = [
      axios.get(`/api/devicestatuses`),
      axios.get(`/api/devicetypes`),
    ];
    // let promiseArr1 = [setRoles(), axios.get(`/api/users/${params.id}`)]

    Promise.all(promiseArr).then(([deviceStatusRes, devicecTypeRes]) => {
      // handle success
      let roles: IDeviceStatus[] = deviceStatusRes.data || [];
      setDeviceStatus(deviceStatus);

      // handle success
      let user: IDeviceTypes = devicecTypeRes.data || {};
      setDeviceTypes(deviceTypes);
    });
  }, []);

  function onEdit(i: number) {
    setSelectedType(deviceTypes[i]);
    // window.localStorage.setItem('selectedUser', users[i].id.toString())
    window.location.replace(
      `/org/device-type/device-type-detail/${deviceTypes[i].id}`
    );
  }

  function onDelete(i: number) {
    deviceTypes.splice(i, 1);
    axios
      .delete(`/api/devicetypes/`)
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
          <button>Add new Device type</button>
        </div>

        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
          {deviceTypes.map((dt, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{dt.name}</td>
                <td>{dt.description}</td>
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
