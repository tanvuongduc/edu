'use client';
import Image from 'next/image'
import styles from './page.module.css'
import './table.css';

export default function Home() {
  let header = 'User List'
  function test() {
    console.log("duong");
  }
  return (
    <div>
      <h1 className={styles.red} style={{color: 'blue', backgroundColor: '#fff'}}>{header}</h1>
      <button onClick={test}>Test</button>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <div>
                <button>edit</button>
                <button>delete</button>
              </div>
            </tr>
          </tbody>
        </table>
      </div >
    </div>
  )
}