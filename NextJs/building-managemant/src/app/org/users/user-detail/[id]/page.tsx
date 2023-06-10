'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { IUser } from '../../user-list/page'
export default function UserDetail({ params }: any) {
  const hasPermission = true; // Replace with your own permission check logic
  let users: IUser[]
  // let selectedUser: IUser | null = null;
  // if (typeof window !== "undefined") {
  users = JSON.parse(window.localStorage.getItem('users') || 'null');

  let [selectedUser, setSelectedUser] = useState<IUser>(users.find(u => u.id == params.id) || {})
  // }

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
    console.log('Component UserDetail has been init and updated');
    if (!hasPermission) {
      window.location.replace('/')
    }
  }, []);

  function onNameChange(ev: ChangeEvent) {
    if (selectedUser.name != ev.target.value) {
      selectedUser.name = ev.target.value;
      setSelectedUser({ ...selectedUser })
    }
  }

  function onGenderChange(ev: ChangeEvent) {
    console.log('aaaaaaaaaaaaaaaaa', ev);
    if (selectedUser.gender != ev.target.value) {
      selectedUser.gender = ev.target.value;
      setSelectedUser({ ...selectedUser })
    }
  }

  return (
    <div>
      <h1>User detail</h1>
      <span>User ID: {selectedUser.id?.toString()}</span><br></br>
      <span>User Name: </span>
      <span><input type="text" placeholder='User Name' value={selectedUser.name} onChange={(ev) => { onNameChange(ev) }} /></span>
      <br></br>
      <span>Gender: </span>
      <span>
        <div>
          <input type="radio" id="male-id" name="gender" placeholder='Gender' value={true} checked={selectedUser.gender} onChange={(ev) => {onGenderChange(ev)}}/>
          <label htmlFor="male-id">Male</label><br></br>
          <input type="radio" id="female-id" name="gender" placeholder='Gender' value={false} checked={!selectedUser.gender} onChange={(ev) => {onGenderChange(ev)}}/>
          <label htmlFor="female-id">Female</label><br></br>
        </div>
      </span>
      <span>Role: </span>
      <span>
        <select value={selectedUser.roleId}>
          <option value="-1">---Select Role---</option>
          {
            roles.map((r, i) => {
              return (
                <option key={i} value={r.id}>{r.name}</option>
              )
            })
          }
        </select>
      </span>
      <button onClick={() => { history.back() }}>Back</button>
    </div>
  )
}
