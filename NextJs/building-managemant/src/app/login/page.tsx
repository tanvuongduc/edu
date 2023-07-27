'use client';
import { useEffect, useState } from 'react';
import constant from '../../constants/constant';
import axios from 'axios';
export interface ILogin { userName: string; password: string }
export default function Login() {
  

  let [loginData, setLoginData] = useState<ILogin>({})

  

  function onUserNameChange(ev: ChangeEvent) {
    if (loginData.userName != ev.target.value) {
      loginData.userName = ev.target.value;
      setLoginData({ ...loginData })
    }
  }

  function onPassChange(ev: ChangeEvent) {
    if (loginData.password != ev.target.value) {
      loginData.password = ev.target.value;
      setLoginData({ ...loginData })
    }
  }

  function onLogin() {
    axios.post(`/api/login`, loginData).then(res => {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', res.data);
      window.localStorage.setItem(constant.token, res.data.token)
    })
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>

      <span>User Name: </span>
      <span><input type="text" placeholder='User Name' value={loginData.userName} onChange={(ev) => { onUserNameChange(ev) }} /></span>
      <br></br>
      <span>Password: </span>
      <span><input type="password" placeholder='Pass Word' value={loginData.password} onChange={(ev) => { onPassChange(ev) }} /></span>
      <br></br>
      <button onClick={() => onLogin()}>Login</button>

    </div>
  )
}
