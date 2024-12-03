import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
const Signup = () => {

  const router = useRouter()
  const [retailer_id, setRetailerId] = useState('')
  const [shopname, setShopName] = useState('')
  const [password, setPassword] = useState('')
  const [ownername, setOwnerName] = useState('')
  const [registration_no, setRegistrationNo] = useState('')
  const [registration_doc, setRegistrationdoc] = useState('')
  const [profile_photo, setProfile] = useState('')
  const [gst_no, setGst] = useState('')
  const [pan_no, setPanNo] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [email, setEmail] = useState('')

  const handleImageProfile = (e) => {

    setProfile(e.target.files[0])
  }
  const handleImageRD = (e) => {

    setRegistrationdoc(e.target.files[0])
  }

  const submitData = async () => {
    // e.preventDefault();
    const formData = new FormData()
    formData.append('retailer_id', retailer_id);
    formData.append('shopname', shopname);
    formData.append('password', password);
    formData.append('ownername', ownername);
    formData.append('registration_no', registration_no);

    formData.append('registration_doc', registration_doc);
    formData.append('profile_photo', profile_photo);
    formData.append('gst_no', gst_no);
    formData.append('pan_no', pan_no);

    formData.append('address', address);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('email', email);
    formData.append('pincode', pincode);


    const configs = {
      "content-Type": "multiple/form-data"
    }
    const apiData = await axios.post("http://localhost:5500/retailers", formData, configs)
    console.log(apiData, 'apidata')
    setRetailerId("")
    setShopName("")
    setPassword('')
    setOwnerName('')
    setRegistrationNo('')
    setRegistrationdoc('')
    setProfile('')
    setGst('')
    setPanNo('')
    setAddress('')
    setState('')
    setCity('')
    setEmail('')
    setPincode('')
    router.push('/component/login')
 }

  return (
    <div>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">

            <h3>Welcome</h3>
            <h4>to</h4>
            <span className=" d-flex" style={{ justifyContent: "center" }}>
              <h3 style={{ fontStyle: "italic", color: "orange" }}>
                <ShoppingCartOutlined />
              </h3>
              <h3 style={{ fontStyle: "italic", color: "white" }}>SHOPPER's</h3></span>
              <Link href='/component/login'>
              <button type="button">Login</button>
              </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">


            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Retailer Registration</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group m-2 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Retailer Id*"
                        defaultValue=""
                        value={retailer_id} onChange={(e) => setRetailerId(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ShopName *"
                        defaultValue=""
                        value={shopname} onChange={(e) => setShopName(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        defaultValue=""
                        value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="OwnerName *"
                        defaultValue=""
                        value={ownername} onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Registration No. *"
                        defaultValue=""
                        value={registration_no} onChange={(e) => setRegistrationNo(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gst No.*"
                        defaultValue=""
                        value={gst_no} onChange={(e) => setGst(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="PAN No. *"
                        defaultValue=""
                        value={pan_no} onChange={(e) => setPanNo(e.target.value)}
                      />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group m-2 d-flex">
                      <p className='m-2'>Profile_photo</p>
                      <input
                        type="file"
                        className="form-control"
                        required
                        defaultValue=""
                        onChange={handleImageProfile}
                      />
                    </div>
                    <div className="form-group m-2 d-flex">
                      <p className='m-2'>ResgisDoc</p>
                      <input
                        type="file"
                        className="form-control"
                        required
                        defaultValue=""
                        onChange={handleImageRD}
                      />
                    </div>
                    {/* <div className="form-group m-2">
                      <input
                        type="text"
                        minLength={10}
                        maxLength={10}
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                        defaultValue=""
                      />
                    </div> */}
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="state *"
                        defaultValue=""
                        value={state} onChange={(e) => setState(e.target.value)}
                      />
                    </div>

                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="city*"
                        defaultValue=""
                        value={city} onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Address*"
                        defaultValue=""
                        value={address} onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" pincode*"
                        defaultValue=""
                        value={pincode} onChange={(e) => setPincode(e.target.value)}
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email*"
                        defaultValue=""
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <button type="button" class="btnRegister" onClick={submitData}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Signup
