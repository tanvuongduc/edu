'use client';
import Image from 'next/image'
import styles from './page.module.css'

interface IUser {
  id: Number;
  name: String;
  age?: Number;
  gender: Boolean;
  roleId: Number;
  address?: IAddress;
}

interface IAddress {
  city: String;
  district: String;
  ward: String;
  street: String;
}

export default function Home() {
  let users: IUser[];
  let user1 = { name: 'tan' }
  // user = user1;
  let header: any = 123;
  header = 'User List';
  let isEdit = false;
  users = [
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

  function test(ev: any, index: Number) {
    console.log('aaaaaaaaaaaaaaaaaaaaa', ev);
  
  }
  
  return (
    <div>
      <h1 className={styles.red} style={{ color: 'blue', backgroundColor: '#fff' }}>{users.map(user => user.name)}</h1>
      <button onClick={(ev) => {test(ev, 1)}}>Test</button>
      <table></table>
      {
        users.map(user => {
          return  (
            <div><span>User Name: </span><span>{user.name}</span></div>
          );
        })
      }
    </div>
  )
}