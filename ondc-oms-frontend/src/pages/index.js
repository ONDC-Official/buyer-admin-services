import Image from 'next/image'
import styles from '../styles/Home.module.css'
import reportWebVitals, { sendToAnalytics }  from '../utils/bootWebVitals.js'
import { useRouter } from 'next/router'
import { isLoggedIn } from "../utils/request.js"
import authenticatedRoute from '../components/auth/AuthenticatedRoute.js';


function Home() {

  const router = useRouter();

  return null;

}

export default authenticatedRoute(Home, { pathAfterFailure: '/login' })

// To make this page authenticated use following:
// export default authenticatedRoute(MyComponent, { pathAfterFailure: '/login' })
