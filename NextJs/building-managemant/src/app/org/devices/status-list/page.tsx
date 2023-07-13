"use client";
import { useEffect, useState } from "react";
export interface IStatus {
  id?: number;
  name?: string;
}

import axios from "axios";

export default function StatusList() {
  let [status, setStatus] = useState<IStatus[]>([]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const resStatus = await axios.get("/api/deviceStatus"); // Replace "/api/deviceStatus" with your actual API endpoint
        setStatus(resStatus.data);
        console.log(setStatus);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchStatus();
  }, []);

  async function AddStatus() {
    try {
      const newStatus: IStatus = {
        name: "New Status", // Thay đổi giá trị name thành giá trị thực tế của trạng thái mới
      };

      const res = await axios.post("/api/deviceStatus", newStatus); // Thay thế "/api/deviceStatus" bằng endpoint thực tế của bạn

      if (res.data) {
        // Nếu thành công, cập nhật danh sách trạng thái
        setStatus([...status, newStatus]);
      } else {
        console.error("Failed to add status");
      }
    } catch (error) {
      console.error("Error adding status:", error);
    }
  }

  async function RemoveStatus(id: any) { // tại sao ko để number đc
    try {
      const res = await axios.delete(`/api/deviceStatus/${id}`); // Thay thế "/api/deviceStatus" bằng endpoint thực tế của bạn

      if (res.data) {
        // Nếu thành công, cập nhật danh sách trạng thái bằng cách loại bỏ trạng thái có id tương ứng
        setStatus(status.filter((s) => s.id !== id));
      } else {
        console.error("Failed to remove status");
      }
    } catch (error) {
      console.error("Error removing status:", error);
    }
  }
  return (
    <div>
      <div>
        <h1>Trạng thái thiết bị</h1>
      </div>

      <div>
        <table>
          <tr>
            <td>
              <span>
                <input
                  type="text"
                  placeholder="Thêm trạng thái thiết bị"
                  readOnly
                />
                <input type="button" value="Add" onClick={AddStatus} />
              </span>
            </td>
          </tr>
          {status.map((s, i) => (
            <tr key={s.id}>
              <td>
                {s.name}
                <input
                  type="button"
                  value="Remove"
                  onClick={() => RemoveStatus(s.id)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
