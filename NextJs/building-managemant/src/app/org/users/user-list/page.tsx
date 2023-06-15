'use client';
import { useEffect, useState } from "react";

export interface IUser{id:Number; name: String; gender: Boolean; roleId: Number; roleName?: String}
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
  ]
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
  useEffect(()=>{
    console.log('aaaaaaaaaaaaaa');
  }, []);
  let[users, setUsers] = useState<IUser[]>(_users);
  let[selectedUser, setSelectedUser] = useState<IUser>();

  function onEdit(i:number){
    setSelectedUser(users[i])
    //window.localStorage.setItem('selectedUser',users[i].id.toString())
    window.location.replace(`/org/users/user-detail/${users[i].id}`)
  }
  function onDelete(i:number){
    users.splice(i,1);
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
          <td>STT</td>
          <td>UserName</td>
          <td>Gender</td>
          <td>Role</td>
          <td>Actions</td>
        </tr>
          {
            users.map(u=>{
              u.roleName = roles.find(r =>r.id == u.roleId)?.name
              return u;
            }).map((user, index)=>{
              console.log(user.id);
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.gender ? "male" : "female"}</td>
                  <td>{user.roleName}</td>
                  <td>
                    <span><button onClick={()=>onEdit(index)}>Edit</button></span>
                    <span><button onClick={()=>onDelete(index)}>Delete</button></span>
                  </td>
                </tr>
              );
            })
          }
      </table>
    </div>
  )
}
