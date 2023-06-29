'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { IUser } from '../../user-list/page';
import axios from 'axios';
export default function UserDetail({ params }: any) {
  const hasPermission = true; // Replace with your own permission check logic
  let users: IUser[] = [];
  // let selectedUser: IUser | null = null;
  // if (typeof window !== "undefined") {

  let [selectedUser, setSelectedUser] = useState<IUser>(users.find(u => u.id == params.id) || { id: 0, name: '', gender: true, roleId: 0 })
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
    axios.get('/api/users')
      .then(function (response) {
        // handle success
        console.log('aaaaaaaaaaaaaaaaaaaaaa', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


    users = JSON.parse(window.localStorage.getItem('users') || 'null');
    setSelectedUser(users.find(u => u.id == params.id) || { id: 0, name: '', gender: true, roleId: 0 })
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
    selectedUser.gender = ev.target.value == 'false' ? false : true;
    setSelectedUser({ ...selectedUser })
  }

  function onRoleChange(ev: ChangeEvent) {
    if (selectedUser.roleId != ev.target.value) {
      selectedUser.roleId = +ev.target.value;
      setSelectedUser({ ...selectedUser })
    }
  }

  function update() {
    users = JSON.parse(window.localStorage.getItem('users') || 'null');
    if (users && users.length) {
      let userIndex = users.findIndex(u => u.id == selectedUser.id);
      if (userIndex >= 0) {
        users[userIndex] = selectedUser;
        window.localStorage.setItem('users', JSON.stringify(users));
      }
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
          <input type="radio" id="male-id" name="gender" placeholder='Gender' value={'true'} checked={selectedUser.gender == true} onChange={(ev) => { onGenderChange(ev) }} />
          <label htmlFor="male-id">Male</label><br></br>
          <input type="radio" id="female-id" name="gender" placeholder='Gender' value={'false'} checked={selectedUser.gender == false} onChange={(ev) => { onGenderChange(ev) }} />
          <label htmlFor="female-id">Female</label><br></br>
        </div>
      </span>
      <span>Role: </span>
      <span>
        <select value={selectedUser.roleId} onChange={(ev) => onRoleChange(ev)}>
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
      <button onClick={() => {
        console.log(selectedUser);
      }}>test</button>
      <button onClick={() => { update() }}>Update</button>
      <button onClick={() => { history.back() }}>Back</button>
    </div>
  )
}
