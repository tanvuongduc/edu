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
    <>
    {
      //isEdit? 
      // <div></div>:
      <div>
      {/* <h1 className={styles.red} style={{ color: 'blue', backgroundColor: '#fff' }}>{users.map(user => user.name)}</h1>
      <button onClick={(ev) => {test(ev, 1)}}>Test</button>
      <table></table>
      {
        users.map((user, index) => {
          return  (
            <div key={index}><span>User Name: </span><span>{user.name}</span></div>
          );
        })
      } */}
      <h1 className={styles.red}>User List</h1>
      <button onClick={(ev) => {test(ev, 1)}}>Add User</button>
      <table className={styles.border}>
        <tr className={styles.bold}>
          <td className={styles.border}>STT</td>
          <td className={styles.border}>UserName</td>
          <td className={styles.border}>Gender</td>
          <td className={styles.border}>Role</td>
          <td className={styles.border}>Actions</td>
        </tr>
          {
            users.map((user, index)=>{
              return (
                <tr key={index}>
                  <td className={styles.border}>{index+1}</td>
                  <td className={styles.border}>{user.name}</td>
                  <td className={styles.border}>{user.gender.toString()}</td>
                  <td className={styles.border}>{user.roleId.toString()}</td>
                  <td className={styles.border}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })
          }
      </table>
    </div>
    }
  </>
  )
}