"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { IType } from "../../type-list/page";
import { IStatus } from "../../status-list/page";
import axios from "axios";

export default function TypeDetail({ params }: any) {
  let types: IType[] = [];

  const hasPermission = true;

  let [selectedType, setSelectedType] = useState<IType>(
    types.find((d) => d.id == params.id) || {
      id: 0,
      name: "",
      description: "",
      statuses: 0,
    }
  );

  let [status, setStatus] = useState<any[]>([])

  useEffect(() => {

    if (!hasPermission) {
      window.location.replace('/')
    }

    let promiseArr = [axios.get(`/api/deviceStatus`), axios.get(`/api/deviceTypes/${params.id}`)]

    Promise.all(promiseArr).then(([statusRes, typesRes]) => {

        // handle success
        let status: any[] = statusRes.data || [];
        setStatus(status)


        // handle success
        let type: IType = typesRes.data || {};
        setSelectedType(type)
    })

  }, []);


  function onTypeChange(ev: ChangeEvent<HTMLSelectElement>) {
    if (selectedType.statuses != ev.target.value) {
      selectedType.statuses = +ev.target.value;
      setSelectedType({ ...selectedType })
    }
  }

  function update() {
    axios
      .put(`/api/deviceTypes/${selectedType.id}`, selectedType)
      .then(response => {
        console.log("Type updated successfully");
        // Perform any additional actions after the update
      })
      .catch(error => {
        console.error("Error updating type:", error);
        // Handle error cases
      });
  }
  

  return (
    <div>
      <h1>Chi tiết loại thiết bị</h1>
      <br></br>
      <span>Tên : </span>
      <span><input type="text" placeholder='Device Type Name' value={selectedType.name} /></span>
      <span>Mô tả : </span>
      <span><input type="text" value={selectedType.description} /></span>
      <span>Trạng thái : </span>
      <span>
        <select value={selectedType.statuses} onChange={(ev) => onTypeChange(ev)}>
          <option value="-1">---Select Status Type---</option>
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
          console.log(selectedType);
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
