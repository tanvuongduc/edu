import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IDeviceStatus {
  id?: string | number;
  name?: string;
}

export default function App(props: IDeviceStatus) {
  let [deviceStatus, setDeviceStatus] = useState<IDeviceStatus[]>([]);
  useEffect(() => {
    let promiseArr = [axios.get(`/api/devicestatuses`)];

    Promise.all(promiseArr).then(([deviceStatusRes]) => {
      // handle success
      let deviceStatus: IDeviceStatus[] = deviceStatusRes.data || [];
      setDeviceStatus(deviceStatus);
    });
  }, []);

  function handleAddDeviceStatus() {
    const deSta = {};
  }
  return (
    <div>
      <div>
        <span>Trạng thái thiết bị</span>
        <div className="flex items-center">
          <input
            title="devicestatus"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            title="adddevicestatus"
            className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-r-md"
            onClick={handleAddDeviceStatus}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <div>
          {deviceStatus.map((ds, i) => (
            <div key={i}>{ds.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
