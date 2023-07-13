"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function DeviceStatues() {
  let [devicestatues, setDevicestatuses] = useState([] || {id: 0, name: ''});
  const [item, setItem] = useState("");
  const [idCounter, setIdCounter] = useState(0)
  useEffect(() => {
    // axios
    //   .get(`/api/devicestatues`)
    //   .then(function (response) {
    //     // handle success
    //     let devicestatues = response.data || {};
    //     console.log("aaaaaaaaaaaaaaaaaaaaaa", response);
    //     setDevicestatuses(devicestatues);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
    
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/devicestatues');
          setDevicestatuses(response.data);
          console.log(response);
          
          const maxId = response.data.reduce((max:any, record:any) => {
            return record.id > max ? record.id : max;
          }, 0);
          
          console.log(maxId);
          setIdCounter(maxId)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
  }, [item]);

  console.log(item);


  const handleInputChange = (event:any) => {
    setItem(event.target.value);
  };



  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      await axios.post('/api/devicestatues', { id:  idCounter + 1  ,name: item });
      const response = await axios.get('/api/devicestatues');
      setDevicestatuses(response.data);
      setItem('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (event:any, index:number) => {
    event.preventDefault();
    try {
      await axios.post('/api/deleteDevicestatues', { id:  index + 1});
      const response = await axios.get('/api/devicestatues');
      setDevicestatuses(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Trạng thái thiết bị</h1>
      <div className={style.box}>
        <form className={style.inputContainer} onSubmit={(ev) => handleSubmit(ev)}  >
          <input
            className={style.input}
            value={item}
            onChange={handleInputChange}
            type="text"
            placeholder="Thêm trạng thái thiết bị"
          />
          <button className={style.addIcon} type="submit" >
            +
          </button>
        </form>  
              {devicestatues.map((device:any, i) => {
          return (
            <ul className={style.ul} key={i}>
              <li className={style.li} key={i}>
                {device.name}
              </li>
              <button className={style.addIconDelete} onClick={(ev) => handleDelete(ev, i)}>-</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
