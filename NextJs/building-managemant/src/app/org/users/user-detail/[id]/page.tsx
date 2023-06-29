'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { IUser } from '../../user-list/page';
import axios from 'axios';
export default function UserDetail({ params }: any) {
  console.log('111111111111111111111111111');
  
  const hasPermission = true; // Replace with your own permission check logic
  let users: IUser[] = [];
  // let selectedUser: IUser | null = null;
  // if (typeof window !== "undefined") {

  let [selectedUser, setSelectedUser] = useState<IUser>(users.find(u => u.id == params.id) || { id: 0, name: '', gender: true, roleId: 0 })
  let [roles, setRoles] = useState<any[]>([])
  // }

  // let roles = [ // Quyền của hệ thống
  //   {
  //     id: 1,
  //     name: "admin",
  //   },
  //   {
  //     id: 2,
  //     name: "citizen",
  //   },
  //   {
  //     id: 3,
  //     name: "security",
  //   },
  //   {
  //     id: 4,
  //     name: "staff",
  //   },
  //   {
  //     id: 5,
  //     name: "guest",
  //   },
  // ]
  useEffect(() => {

    if (!hasPermission) {
      window.location.replace('/')
    }

    let promiseArr = [axios.get(`/api/roles`), axios.get(`/api/users/${params.id}`)]
    // let promiseArr1 = [setRoles(), axios.get(`/api/users/${params.id}`)]

    Promise.all(promiseArr).then(([rolesRes, usersRes]) => {

        // handle success
        let roles: any[] = rolesRes.data || [];
        setRoles(roles)


        // handle success
        let user: IUser = usersRes.data || {};
        setSelectedUser(user)
    })
    
    // axios.get(`/api/roles`)
    //   .then(function (response) {
    //     // handle success
    //     let roles: any[] = response.data || [];
    //     console.log('aaaaaaaaaaaaaaaaaaaaaa', response);
    //     setRoles(roles)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    // axios.get(`/api/users/${params.id}`)
    //   .then(function (response) {
    //     // handle success
    //     let user: IUser = response.data || {};
    //     setSelectedUser(user)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

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
