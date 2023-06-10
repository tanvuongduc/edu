'use client';
import { useEffect, useState } from 'react';
export interface IUser { id?: number; name?: string; gender?: boolean; roleId?: number; roleName?: string }
export default function UserList() {
  let _users: IUser[] = [
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
  ];

  let roles = [ // Quyền của hệ thống
    {
      id: 1,
      name: "admin",
    },
    {
      id: 2,
      name: "citizen",
    },
    {
      id: 3,
      name: "security",
    },
    {
      id: 4,
      name: "staff",
    },
    {
      id: 5,
      name: "guest",
    },
  ]
  useEffect(() => {

    console.log('aaaaaaaaaaaaaaaaaaaa');
  }, []);

  let [users, setUsers] = useState<IUser[]>(_users)
  let [selectedUser, setSelectedUser] = useState<IUser>()

  function onEdit(i: number) {
    setSelectedUser(users[i])
    // window.localStorage.setItem('selectedUser', users[i].id.toString())
    window.location.replace(`/org/users/user-detail/${users[i].id}`)
  }

  function onDelete(i: number) {
    users.splice(i, 1);
    window.localStorage.setItem('users', JSON.stringify(users))
    setUsers([...users])
  }

  return (
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
        {
          users.map(u => {
            u.roleName = roles.find(r => r.id === u.roleId)?.name;
            return u;
          }).map((u, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.gender ? 'Male' : 'Female'}</td>
                <td>{u.roleName}</td>
                <td>
                  <span><button onClick={() => { onEdit(i) }}>Edit</button></span>
                  <span><button onClick={() => { onDelete(i) }}>Delete</button></span>
                </td>
              </tr>
            )
          })
        }
      </table>


    </div>
  )
}
