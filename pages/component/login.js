import React, { useState, useEffect , useContext} from 'react'
import Link from 'next/link';
import { ShoppingCartOutlined,ExclamationCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { RetailerContext } from '../context/retailerContext';


const Login = () => {
  const { setRetailerID } = useContext(RetailerContext);
  const { setOwnerName } = useContext(RetailerContext);
  const router = useRouter()
  const [cookies, setCookie] = useCookies(['token']);
  const [loginInfo, setLoginInfo] = useState({
    retailer_id: "",
    password: ""
  })
  const [formErrors, setFormerrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(loginInfo)
    }
  }, [loginInfo])
  const validate = (values) => {
    const errors = {};
    if (!values.retailer_id) {
      errors.retailer_id = "retailer id is required"
    }
    if (!values.password) {
      errors.password = "password is required"
    }
    return errors;
  }

  const submitData = async (e) => {
    e.preventDefault()
    const headers = {
      "Content-Type": "application/json"
    }
    const apiData = await axios.post("http://localhost:5500/shopkeeperlogin", loginInfo, headers)

    setFormerrors(validate(loginInfo));
    setIssubmit(true)
    
    if (apiData.data.message == "Invalid user, please enter the correct credentials") {
      console.log(apiData.data.message)
      setFormerrors({ retailer_id: apiData.data.message });
    }
    else if (apiData.data.message == "Oops wrong passsword") {
      console.log(apiData.data.message)
      setFormerrors({  password: apiData.data.message });
    }

    else if (apiData.data.users.status == 'deactive') {
      alert(apiData.data.message)

    }
    else {
      const token = apiData.data.token;
      
      setRetailerID(loginInfo.retailer_id);
      setOwnerName(apiData.data.ownername);
      // sessionStorage.setItem('token', apiData.data.token)
      setCookie('token', apiData.data.token, { path: '/' });
      const user = apiData.data.users;
      const userString = JSON.stringify(user);
      sessionStorage.setItem('user', userString);

      // sessionStorage.setItem('owner', apiData.data.ownername);

      router.push('/content/dashboard/dashboard')
    }
  }


  return (


    <>

      <section>
        <div className="page">
          <div className="welcome">
            <h2>Welcome Back!</h2>
            <h4 style={{ fontStyle: "italic", color: "orange" }}>
              <ShoppingCartOutlined />
            </h4>
            <h4 style={{ fontStyle: "italic", color: "white" }}>SHOPPER's</h4>
            <Link href="/component/signup" >
              <button className="sign_in">Sign up</button>
            </Link>
          </div>
          <div className="sign_up">
            <form method="POST" action="signup_user.php">
              <h2>Login to your Account</h2>

              <br />
              <input type="text" name="retailer_id" placeholder="RetailerId" onChange={handleChange} />

              <p style={{ color: "red" }}>{formErrors.retailer_id}</p>

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />

              <p style={{ color: "red" }}>{formErrors.password}</p>


              <button className="up" onClick={submitData}>Login</button>

            </form>
            <div id="formFooter">
              <p className="fgpwd" style={{ marginTop: "4px", cursor: "pointer" }}>Forget Password?</p>
            </div>
          </div>

        </div>
      </section>

    </>

  )
}

export default Login;
