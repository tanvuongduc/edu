'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar, Footer } from './nav-bar';
import { useState } from 'react';

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
  let [footerMessage, setFooterMessage] = useState('Copyright 2024');
  let [navItems, setNavItems] = useState<{ title: String; url: String }[]>([]);

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
console.log('11111111111111111111');

  window.localStorage.setItem('users', JSON.stringify(users))
  window.localStorage.setItem('roles', JSON.stringify(roles))

  function test(ev: any, index: Number) {
    console.log('aaaaaaaaaaaaaaaaaaaaa', ev);

  }

  // let _footerMessage = 'Copyright 2024'

  function changeFooter() {
    setFooterMessage(footerMessage += '!');
    console.log('bbbbbbbbbbbbbbbbbbb', footerMessage);

  }

  function changeNavItems() {
    navItems.push({ title: 'Home', url: '/home' })
    setNavItems([...navItems]);
    console.log('vvvvvvvvvvvvvvvvvvv', navItems);

  }

  return (
    <>
      <NavBar items={navItems}></NavBar>
      {
        isEdit ?
          <div className='user-edit'></div> :

          <div className='user-list'>
            <h1 className={styles.red} style={{ color: 'blue', backgroundColor: '#fff' }}>{users.map(user => user.name)}</h1>
            <button onClick={(ev) => { test(ev, 1) }}>Test</button>
            <table></table>
            {
              users.map((user, i) => {
                return (
                  <div key={i}><span>User Name: </span><span>{String(user.id)}</span></div>
                );
              })
            }

            <button onClick={() => changeNavItems()}>Change Nav Items</button>
            <button onClick={() => changeFooter()}>Change Footer</button>
          </div>
      }
      <Footer message={footerMessage}></Footer>
    </>
  )
}