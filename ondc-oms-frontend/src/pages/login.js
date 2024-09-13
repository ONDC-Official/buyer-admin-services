import Login from '../components/auth/Login.js';
import styles from '../styles/Login.module.css';
import { Divider } from 'antd';

export default function LoginPage() {
  return (
    <div className={styles.container}>
        <h1>
          Login to {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </h1>
        <div className={styles.grid}>
          <Login />
        </div>
    </div>
  )
}
