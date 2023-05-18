
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>User list</h1>
      <button className={styles.right}>Add User</button>
      <table className={styles.table}>
        <tr className={styles.bold}>
          <td className={styles.table}>STT</td>
          <td className={styles.table}>Họ tên</td>
          <td className={styles.table}>Địa chỉ</td>
          <td className={styles.table}>Actions</td>
        </tr>
        <tr>
          <td className={styles.table}>1</td>
          <td className={styles.table}>Chung</td>
          <td className={styles.table}>Quảng Ninh</td>
          <td className={styles.table}>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  )
}
