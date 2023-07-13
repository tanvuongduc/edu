"use client";
import { useEffect, useState } from "react";
export interface IType {
  id?: number;
  name?: string;
  description?: string;
  statuses?: any;
}

import axios from "axios";

export default function TypesList() {
  // let _deviceTypes: IType[] = [
  //   {
  //     id: 1,
  //     name: "Cửa",
  //     description: "Cửa dùng để đóng, mở",
  //     statuses: [1, 2, 3], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
  //   },
  //   {
  //     id: 2,
  //     name: "Quạt",
  //     description: "Quạt mát",
  //     statuses: [1, 6, 7, 8, 9], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
  //   },
  //   {
  //     id: 3,
  //     name: "Đèn",
  //     description: "Đèn sáng",
  //     statuses: [1, 4, 5], // Device Status Id; Mỗi loại thiết bị có các loại trạng thái khác nhau
  //   },
  // ];

  let [types, setTypes] = useState<IType[]>([]);
  let [selectedType, setSelectedType] = useState<IType>()

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const resStatus = await axios.get("/api/deviceTypes"); // Replace "/api/deviceTypes" with your actual API endpoint
        setTypes(resStatus.data);
        console.log(setTypes);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchTypes();
  }, []);

  function onEdit(i: number) {
    setSelectedType(types[i])
    window.location.replace(`/org/devices/type-detail/${types[i].id}`)
  }

  function onDelete(i: number) {
    const typeIdToDelete = types[i].id;
  
    axios
      .delete(`/api/deviceTypes/${typeIdToDelete}`) // Thay "/api/deviceTypes" bằng endpoint API 
      .then((response) => {
        console.log("deleted successfully");
        const updatedTypes = types.filter((type) => type.id !== typeIdToDelete);
        setTypes(updatedTypes);
      })
      .catch((error) => {
        console.error("Error deleting type:", error);
      });
  }

  return (
    <div>
    <div>
      <h1>Loại thiết bị</h1>
      <button>Add new </button>
    </div>

    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Mô tả</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {types
          .map((type, i) => (
            <tr key={type.id}>
              <td>{i + 1}</td>
              <td>{type.name}</td>
              <td>{type.description}</td>
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
