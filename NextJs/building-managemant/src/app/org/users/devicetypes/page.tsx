"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";

export interface IDeviceType {
  id: number;
  name: string;
  description: string;
}
export default function DeviceType() {
  const [deviceType, setDeviceType] = useState<IDeviceType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/devicetypes");
        setDeviceType(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const onUpdate = async (index:number) => {
    window.location.replace(`/org/users/device-detail/${deviceType[index].id}`)
  };
  return (
    <div className={style.box}>
      <div className={style.header}>
        <h1>Loại thiết bị</h1>
        <button className={style.button}>Thêm mới</button>
      </div>
        <table className={style.table}>
            <thead>
          <tr className={style.tr}>
            <th className={style.th}>STT</th>
            <th className={style.th}>Tên</th>
            <th className={style.th}>Mô tả</th>
            <th className={style.th}>Thao tác</th>
          </tr>
            </thead>
            <tbody>
          {deviceType.map((devicetype, i) => {
            return (
              <tr className={style.tr} key={i}>
                <td className={style.td}>{i + 1}</td>
                <td className={style.td}>{devicetype.name}</td>
                <td className={style.td}>{devicetype.description}</td>
                <td className={style.td}>
                  <span>
                    <button onClick={() => onUpdate(i)}>Edit</button>
                  </span>
                  <span>
                    <button>Delete</button>
                  </span>
                </td>
              </tr>
            );
          })}
            </tbody>
        </table>
      </div>
  );
}
