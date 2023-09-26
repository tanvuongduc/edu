"use client";
import React, { useEffect, useState } from "react";
import { IRole } from "../../roles/role-list/page";
import axios from "axios";

export interface IUser {
  id?: number;
  name?: string;
  gender?: boolean;
  roleId?: number | string;
  roleName?: string;
}

export default function UserList(props: IUser) {
  const hasPermission = true;
  let [users, setUsers] = useState<IUser[]>([]);
  let [roles, setRoles] = useState<IRole[]>([]);
  let [selectedUser, setSelectedUser] = useState<IUser>();

  useEffect(() => {
    if (!hasPermission) {
      window.location.replace("/");
    }

    let promiseArr = [axios.get(`/api/roles`), axios.get(`/api/users`)];
    // let promiseArr1 = [setRoles(), axios.get(`/api/users/${params.id}`)]

    Promise.all(promiseArr).then(([rolesRes, usersRes]) => {
      // handle success
      let roles: IRole[] = rolesRes.data || [];
      setRoles(roles);

      // handle success
      let user: IUser = usersRes.data || {};
      setSelectedUser(user);
    });
  }, []);

  function onEdit(i: number) {
    setSelectedUser(users[i]);
    // window.localStorage.setItem('selectedUser', users[i].id.toString())
    window.location.replace(`/org/users/user-detail/${users[i].id}`);
  }

  function onDelete(i: number) {
    users.splice(i, 1);
    axios
      .delete(`/api/users/`)
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
          <button>Add new User</button>
        </div>

        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {users
            .map((u) => {
              u.roleName = roles.find((r) => r.name === u.roleId)?.name;
              return u;
            })
            .map((u, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.gender ? "Male" : "Female"}</td>
                  <td>{u.roleName}</td>
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
