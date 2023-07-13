"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { IDevice } from "../../device-list/page";
import { IUser } from "../../../users/user-list/page";
import { IType } from "../../type-list/page";
import { IStatus } from "../../status-list/page";
import axios from "axios";

export default function DeviceDetail({ params }: any) {
  let devices: IDevice[] = [];

  let [selectedDevice, setSelectedDevice] = useState<IDevice>(
    devices.find((d) => d.id == params.id) || {
      id: 0,
      name: "",
      description: "",
      deviceType: 0,
      status: 0,
      owner: 0,
    }
  );
  let [users, setUsers] = useState<IUser[]>([]);
  let [types, setTypes] = useState<IType[]>([]);
  let [status, setStatus] = useState<IStatus[]>([]);

  const hasPermission = true;

  useEffect(() => {
    if (!hasPermission) {
      window.location.replace("/");
    }

    let promiseArr = [
      axios.get(`/api/users`),
      axios.get(`/api/deviceTypes`),
      axios.get(`/api/deviceStatus`),
      axios.get(`/api/devices/${params.id}`),
    ];

    Promise.all(promiseArr).then(([usersRes, deviceTypesRes, deviceStatusRes, devicesRes]) => {
      // handle success
      let users: IUser[] = usersRes.data || [];
      setUsers(users);

      let types: IType[] = deviceTypesRes.data || [];
      setTypes(types);

      let status: IStatus[] = deviceStatusRes.data || [];
      setStatus(status);

      // handle success
      let devices: IDevice = devicesRes.data || {};
      setSelectedDevice(devices);
    });
  }, []);

  function onTypeChange(ev: ChangeEvent<HTMLSelectElement>) {
    const selectedType = parseInt(ev.target.value);
    setSelectedDevice((prevDevice) => ({
      ...prevDevice,
      deviceType: selectedType,
    }));
  }

  function onOwnerChange(ev: ChangeEvent<HTMLSelectElement>) {
    const selectedOwner = parseInt(ev.target.value);
    setSelectedDevice((prevDevice) => ({
      ...prevDevice,
      owner: selectedOwner,
    }));
  }

  function onStatusChange(ev: ChangeEvent<HTMLSelectElement>) {
    const selectedStatus = parseInt(ev.target.value);
    setSelectedDevice((prevDevice) => ({
      ...prevDevice,
      status: selectedStatus,
    }));
  }

  function update() {
    axios
      .put(`/api/devices/${selectedDevice.id}`, selectedDevice)
      .then((response) => {
        console.log("Device updated successfully");
        // Perform any additional actions after the update
      })
      .catch((error) => {
        console.error("Error updating device:", error);
        // Handle error cases
      });
  }

  return (
    <div>
      <h1>User detail</h1>
      <span>Device ID: {selectedDevice.id?.toString()}</span>
      <br></br>
      <span>Tên : </span>
      <span>
        <input
          type="text"
          placeholder="Device Name"
          value={selectedDevice.name}
        />
      </span>
      <span>Mô tả : </span>
      <span>
        <input
          type="text"
          value={selectedDevice.description}
        />
      </span>
      <span>Loại thiết bị : </span>
      <span>
        <select
          value={selectedDevice.deviceType}
          onChange={(ev) => onTypeChange(ev)}
        >
          <option value="-1">---Select Type---</option>
          {types.map((r, i) => {
            return (
              <option key={i} value={r.id}>
                {r.name}
              </option>
            );
          })}
        </select>
      </span>
      <span>Chủ sở hữu : </span>
      <span>
        <select
          value={selectedDevice.owner}
          onChange={(ev) => onOwnerChange(ev)}
        >
          <option value="-1">---Select Owner---</option>
          {users.map((r, i) => {
            return (
              <option key={i} value={r.id}>
                {r.name}
              </option>
            );
          })}
        </select>
      </span>
      <span>Trạng thái : </span>
      <span>
        <select
          value={selectedDevice.status}
          onChange={(ev) => onStatusChange(ev)}
        >
          <option value="-1">---Select Status---</option>
          {status.map((r, i) => {
            return (
              <option key={i} value={r.id}>
                {r.name}
              </option>
            );
          })}
        </select>
      </span>
      <button
        onClick={() => {
          console.log(selectedDevice);
        }}
      >
        test
      </button>
      <button
        onClick={() => {
          update();
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          history.back();
        }}
      >
        Back
      </button>
    </div>
  );
}
