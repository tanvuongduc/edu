"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.css";
export interface IDeviceStatues {
  id: number;
  name: string;
}
export interface IDeviceType {
    id?:number,
    name?:string,
    description?:string
    statuses?: any[];
}
export default function DeviceDetail({ params }: any) {
    let devicetype: IDeviceType[] = []
    // let devicestatues: IDeviceType["devicestatues"] = []
  const [deviceStatues, setDeviceStatues] = useState<IDeviceStatues[]>([]);
  const [deviceType, setDeviceType] = useState<IDeviceType>(devicetype.find(d => d.id == params.id) || {id:0, name:'', description:''});
  useEffect(() => {
    axios
      .get(`/api/device-detail/${params.id}`)
      .then(function (response) {
        // handle success
        let devicetype:IDeviceType = response.data || {};
        setDeviceType(devicetype);
        console.log(devicetype);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

      const fetchData = async () => {
        try {
          // const response = await axios.get("/api/devicestatues");
          // const devicestatuesById = devicetype.filter(de => de.statuses?.includes(response.data.id))
          // setDeviceStatues(devicestatuesById);
          // console.log(devicestatuesById);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  }, []);


  function onNamChange(ev:any) {

  }

  function onDesChange(ev:any){

  }
  
  return (
    <div className={style.box}>
      <h1>Chi tiết thiết bị</h1>
      <form action="" className={style.inputContainer}>
        <label className={style.label} htmlFor="">
          Tên: <input className={style.input} value={deviceType.name} onChange={ev => {onNamChange(ev)}} type="text" />
        </label>
        <br />
        <label className={style.label} htmlFor="">
          Mô tả: <input className={style.input} value={deviceType.description} onChange={ev => {onDesChange(ev)}} type="text" />
        </label>
        <br />
        <div>
          <label className={style.label}>
            Trạng thái:
            {deviceStatues.map((dev, i) => {
              return (
                <ul key={i} className={style.ul}>
                  <li className={style.li}>{dev.name}</li>
                  <button className={style.buttonMinus}>-</button>
                </ul>
              );
            })}
          </label>
        </div>
      </form>
      <button className={style.button}>Thêm trạng thái +</button>
      {/* <button onClick={() => history.back()}>Back</button> */}
    </div>
  );
}
