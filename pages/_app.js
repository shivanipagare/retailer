import '@/styles/globals.css'
import '@/styles/dashboard.css'
//import Sidebar from './component/sidebar'
import { ChakraProvider } from '@chakra-ui/react'
// import styles from '/styles/dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './component/login';
import '@/styles/signup.css'
import '@/styles/login.css'
import '@/styles/sidebar.css'
import { RetailerProvider } from '../pages/context/retailerContext';

export default function App({ Component, pageProps }) {

  return (
   
<RetailerProvider>
  <Component {...pageProps} />
 
  </RetailerProvider>
  
  )
}
