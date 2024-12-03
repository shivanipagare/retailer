import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { RetailerContext } from '@/pages/context/retailerContext'
import { Button } from 'antd';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Addproduct = () => {

  const { retailerID } = useContext(RetailerContext);

  const [pid, setProductId] = useState('')
  const [price, setPrice] = useState('')
  const [available_quantity, setAvaiQuant] = useState('')
  const [subcategory_id, setSubcategoryId] = useState('')
  const [item_name, setProductName] = useState('')
  const [company, setCompanyName] = useState('')
  const [image, setProductImage] = useState('')

  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [weight, setWeight] = useState("")
  const [mfg, setMfg] = useState("")
  const [expirydate, setExipry] = useState("")
  const [modelname, setModel] = useState("")
  const [description, setDesc] = useState("")

  const handleImage = (e) => {
    setProductImage(e.target.files[0])
  }

 
  const submitData = async () => {
    const formData = new FormData();
    formData.append('pid', pid);
    formData.append('retailer_id', retailerID)
    formData.append('price', price);
    formData.append('available_quantity', available_quantity);
    // formData.append('subcategory_id', subcategory_id);
    formData.append('item_name', item_name);
    formData.append('company', company);
    formData.append('image', image);
    formData.append('color', color);
    formData.append('size', size);
    formData.append('weight', weight);
    formData.append('mfg', mfg);
    formData.append('expirydate', expirydate);
    formData.append('modelname', modelname);
    formData.append('description', description);
   
    const configs = {
      "Content-Type": "multipart/form-data"
    };

    try {
      const apiData = await axios.post("http://localhost:5500/addproductdescid", formData, configs);
      
      console.log(apiData.data);
      setProductId('');
      setPrice('');
      setAvaiQuant('');
      // setSubcategoryId('');
      setProductName('');
      setCompanyName('');
      setProductImage('');
      setColor('')
      setDesc('')
      setModel('')
      setExipry('')
      setMfg('')
      setSize('')
      setWeight('')
    } catch (error) {
      console.error(error);
    }

    
  }
  const[subData, setData]=useState([])
  const getData = async ()=>{
    const api = await axios.get('http://localhost:5500/subcategory')
    setData(api.data.response)
    console.log(api, 'apidata')
  }
  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
      <div className="container">
        <form id="contact-form" role="form">
          <h4>Add new products</h4>
          <hr />
          <div className="messages" />
          <div className="controls">
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_name">Pid *</label>
                  <input
                    id="form_name"
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="It must be unique"
                    required="required"
                    data-error="name is required."
                    value={pid} onChange={(e) => setProductId(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_email">Price*</label>
                  <input
                    id="form_email"
                    className="form-control"
                    placeholder="Please enter your price*"
                    required="required"
                    data-error="Valid price is required."
                    value={price} onChange={(e) => setPrice(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">Product Name</label>
                  <input
                    id="form_phone"
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Please enter your product number"
                    value={item_name} onChange={(e) => setProductName(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">available-quantity</label>
                  <input
                    id="form_phone"
                    type="text"

                    className="form-control"
                    placeholder="Please enter quantity"
                    value={available_quantity}
                    onChange={(e) => setAvaiQuant(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_name">SubcategoryId*</label>
                  {/* <input
                    id="form_name"
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Please Subcategory*"
                    required="required"
                    value={subcategory_id} onChange={(e) => setSubcategoryId(e.target.value)}
                  /> */}
                  <select className='custom-select'
                   style={{
                    display: "block",
                    height:"35px",
                    width: "100%",
                    padding: "5px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#fff"
                  }} 
                   onChange={(e) =>setSubcategoryId(e.target.value)} > Select subcategory
 {
  subData && subData.map((item, index)=>{
     return(
    
          <option placeholder='Select subcategory for product' value={item.subcategory_id}  >
          {`${item.subcategory_id}, ${item.subcategory_name}`}
          </option>
       
     )
  })
}
</select>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_email">Company *</label>
                  <input
                    id="form_email"
                    type="text"

                    className="form-control"
                    placeholder="Please enter your product company *"
                    required="required"
                    data-error="Valid email is required."
                    value={company} onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">Product Image</label>
                  <input
                    id="form_phone"
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={handleImage}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">color</label>
                  <input
                    id="form_phone"
                    type="text"
                    value={color} onChange={(e) => setColor(e.target.value)}
                    className="form-control"

                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_name">Size*</label>
                  <input
                    id="form_name"
                    type="text"
                    value={size} onChange={(e) => setSize(e.target.value)}
                    className="form-control"
                    placeholder="Please enter size *"
                    required="required"
                    data-error="name is required."
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_email">Weight*</label>
                  <input
                    id="form_email"
                    type="text"
                    value={weight} onChange={(e) => setWeight(e.target.value)}
                    className="form-control"
                    placeholder="Please enter product weight *"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">Manufacturing Date</label>
                  <input
                    id="form_phone"
                    type="date"
                    value={mfg} onChange={(e) => setMfg(e.target.value)}
                    className="form-control"

                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="form_phone">Expiry Date</label>
                  <input
                    id="form_phone"
                    type="date"
                    value={expirydate} onChange={(e) => setExipry(e.target.value)}
                    className="form-control"

                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="clearfix" />
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="form_message">Model Name*</label>
                <input
                  id="form_email"
                  type="text"
                  placeholder='model or brand name'
                  value={modelname} onChange={(e) => setModel(e.target.value)}
                  className="form-control"

                  required="required"
                  data-error="Valid email is required."
                />
                <div className="help-block with-errors" />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="form_message">Description*</label>
                <textarea
                  value={description} onChange={(e) => setDesc(e.target.value)}
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Description of product *"
                  rows={3}
                  required="required"
                  data-error="send a message."

                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-md-12">
              <br />
              <Button

                className="btn btn-secondary "

                onClick={submitData}
              >Submit</Button>
            </div>
          </div>
          <br />
        </form>
      </div>


    </>
  )
}

export default Addproduct;
