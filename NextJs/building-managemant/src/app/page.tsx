'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar, Footer} from './nav-bar';
import { useState } from 'react';
import ReactDOM from 'react-dom';

interface IUser {
  id: number;
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
  let [footerMessage, setFooterMessage] = useState('CopyRight2023');
  console.log("11111111111", footerMessage);
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

  
  // function render(){
  //   <>
  //    <h1 className={styles.red}>User List</h1>
  //     <button onClick={(ev) => {test(ev, 1)}}>Add User</button>
  //     <table className={styles.border}>
  //       <tr className={styles.bold}>
  //         <td className={styles.border}>STT</td>
  //         <td className={styles.border}>UserName</td>
  //         <td className={styles.border}>Gender</td>
  //         <td className={styles.border}>Role</td>
  //         <td className={styles.border}>Actions</td>
  //       </tr>
  //         {
  //           user.map((user, index)=>{
  //             console.log(user.id);
  //             return (
  //               <tr key={index}>
  //                 <td className={styles.border}>{index+1}</td>
  //                 <td className={styles.border}>{user.name}</td>
  //                 <td className={styles.border}>{user.gender.toString()}</td>
  //                 <td className={styles.border}>{user.roleId.toString()}</td>
  //                 <td className={styles.border}>
  //                   <button onClick={(ev) => {test(ev, index)}}>Edit</button>
  //                   <button onClick={() => handleDelete(user.id)} >Delete</button>
  //                 </td>
  //               </tr>
                
  //             );
  //           })
  //         }
  //     </table>
  //   </>
  // }
  // render();
  let [user, setUser] = useState(users);
  function handleDelete(id: number){
    users.splice(id,1);
    setUser([...users])
    console.log('2222222');
    isEdit = true;
    console.log(isEdit);
    //render();
  }
  function test(ev: any, index: number) {
    console.log('aaaaaaaaaaaaaaaaaaaaa', ev, index);
  
  }

  // let footerMessage = 'CopyRight 2023';
  function changeFooter(){
    setFooterMessage(footerMessage += '!'); 
    console.log('object11111');
  }
  
  return (
    <>
    <NavBar/>
    {
      isEdit? 
      <div>
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
            user.map((user, index)=>{
              console.log(user.id);
              return (
                <tr key={index}>
                  <td className={styles.border}>{index+1}</td>
                  <td className={styles.border}>{user.name}</td>
                  <td className={styles.border}>{user.gender.toString()}</td>
                  <td className={styles.border}>{user.roleId.toString()}</td>
                  <td className={styles.border}>
                    <button onClick={(ev) => {test(ev, index)}}>Edit</button>
                    <button onClick={() => handleDelete(user.id)} >Delete</button>
                  </td>
                </tr>
                
              );
            })
          }
      </table>
      </div>:
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
              console.log(user.id);
              return (
                <tr key={index}>
                  <td className={styles.border}>{index+1}</td>
                  <td className={styles.border}>{user.name}</td>
                  <td className={styles.border}>{user.gender.toString()}</td>
                  <td className={styles.border}>{user.roleId.toString()}</td>
                  <td className={styles.border}>
                    <button onClick={(ev) => {test(ev, index)}}>Edit</button>
                    <button onClick={() => handleDelete(user.id)} >Delete</button>
                  </td>
                </tr>
                
              );
            })
          }
      </table>
      <button onClick={()=>changeFooter()}>ChangeFooter</button>
    </div>
    }
    <Footer message={footerMessage}></Footer>
  </>
  )
}