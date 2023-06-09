"use client";
import styles from "./styles.module.css";
import React from "react";
import UserList1 from "./userList";
import { Button, ButtonCreate } from "./userList";
import { useState } from "react";

interface IUser {
  id: number;
  name: string;
  gender: Boolean;
  roleId: number;
}

interface IAddress {
  city: String;
  district: String;
  ward: String;
  street: String;
}
export default function UserList() {
  const [user, setUser] = useState<IUser[]>([
    {
      id: 1,
      name: "tan",
      gender: true,
      roleId: 1,
    },
    {
      id: 2,
      name: "phuong",
      gender: false,
      roleId: 2,
    },
    {
      id: 3,
      name: "thanh",
      gender: true,
      roleId: 4,
    },
    {
      id: 4,
      name: "minh",
      gender: true,
      roleId: 5,
    },
  ]);
  const [showInputs, setShowInputs] = useState(false);

  function handleDelete(id: number) {
    const index = user.findIndex((user) => user.id === id);
    if (index !== -1) {
      const newUsers = user.slice();
      newUsers.splice(index, 1);
      setUser(newUsers);
      console.log("aaaaaaaaaaaaa", newUsers);
    }
  }

  const handleCreateNew = () => {
    setShowInputs(true);
  };
  function handleEdit(id: number) {}
  // let users : IUser[] = [
  //   {
  //     id: 1,
  //     name: "tan",
  //     gender: true,
  //     roleId: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "phuong",
  //     gender: false,
  //     roleId: 2,
  //   },
  //   {
  //     id: 3,
  //     name: "thanh",
  //     gender: true,
  //     roleId: 4,
  //   },
  //   {
  //     id: 4,
  //     name: "minh",
  //     gender: true,
  //     roleId: 5,
  //   },
  // ]

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>RoleId </th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr className={styles.tr} key={user.id}>
              <td className={styles.td}>{user.id}</td>
              <td className={styles.td}>{user.name}</td>
              <td className={styles.td}>{user.gender ? "nam" : "nu"}</td>
              <td className={styles.td}>{user.roleId}</td>
              <td className={styles.td}>
                <Button
                  title="edit"
                  onClick={() => handleEdit(user.id)}
                ></Button>
                <Button
                  title="delete"
                  onClick={() => handleDelete(user.id)}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ButtonCreate title="Create New" onClick={handleCreateNew}></ButtonCreate>
      {showInputs && (
        <div>
          <label htmlFor="Name">
            Name: <input type="text" id="Name" placeholder="Enter Name" />
          </label>
          <select name="" id="liftSelect">
            <option value="">Giới tính</option>
            <option value="">Nam</option>
            <option value="">Nu</option>
          </select>
          <select name="" id="liftSelect">
            <option value="">Role ID</option>
          </select>
          <button>Create</button>
        </div>
      )}
    </div>
  );
}
