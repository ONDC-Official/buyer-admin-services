import styles from '../styles/Signup.module.css';
import { Divider } from 'antd';
import Signup from '../components/signup/Signup.js';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
        <h1>
          Signup to {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </h1>
        <div className={styles.grid}>
          { <Signup /> }
        </div>
    </div>
  )
}
