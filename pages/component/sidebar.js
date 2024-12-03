
import React, { useState, useEffect , useContext} from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UploadOutlined,
    DashboardOutlined,
    GiftOutlined,
    ShoppingCartOutlined,
    BankOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import { RetailerContext } from '../context/retailerContext';
const { Header, Sider, Content } = Layout;
function getItem(children) {
    return children
}

const Sidebar = ({ children }) => {




  
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { ownerName } = useContext(RetailerContext);
////////////for modal///////
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [ownerName, setOwnerName] = useState([])

    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    // const [owner, setOwner] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
      // const owner = sessionStorage.getItem('owner');
      const user = sessionStorage.getItem('user');
      //  setOwner(owner);
       setUser(user)
    }, []);

function logOut(){
  removeCookie('token', { path: '/' });
    //// sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    // sessionStorage.removeItem('owner')
    router.push('/component/login')
}

    return (
<>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="demo-logo-vertical " />
                <h3 style={{ padding: "20px 10px", color: "white", fontStyle: "italic", fontSize: "15px" }}>
                    <ShoppingCartOutlined style={{ marginBottom: "10px", color: "orange", fontSize: "20px" }} />SHOPPER's</h3>


                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}

                    items={[
                        getItem({
                            key: '1',
                            icon: <DashboardOutlined />,
                            label: <Link href="/content/dashboard/dashboard">Dashboard</Link>,
                        }),
                        getItem(
                            {
                                key: '2',
                                icon: <GiftOutlined />,
                                label: <Link href="/content/product/tab">Product</Link>,
                            }),
                        getItem(
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: <Link href="/content/productdesc">ProductDesc</Link>,
                            }),
                        getItem(
                            {
                                key: '4',
                                icon: <BankOutlined />,
                                label: <Link href="/content/retailerbank">Banking</Link>,
                            }),
                        getItem(
                            {
                                key: '5',
                                icon: <ShopOutlined />,
                                label: <Link href="/content/retailerregister">RetailerRegister</Link>,
                            })
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        // background: colorBgContainer,
                        backgroundColor: '#001529',
                        // display:"flex"

                    }}
                >
                    {/* <div className='d-flex'> */}
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: 'white'
                        }}
                    />
                    {/* <p style={{float:"right",color:"yellow",margin:"0 70px",}}>welcome:shivani</p> */}
                    <div style={{ float: "right", margin: "0 70px", }}>
                        <Dropdown>

                            <Dropdown.Toggle style={{ background: "none", border: "none" }} >
                                welcome : {ownerName}
                            </Dropdown.Toggle>


                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleShow} >Profile</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* </div> */}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 600,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>


{/* modal */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"#000067"}}>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="container emp-profile">
    <form method="post">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F513480795011825329%2F&psig=AOvVaw2R-KqfsvTY4U5Usdfd7A21&ust=1685778238311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDMp7yLpP8CFQAAAAAdAAAAABAE"
              alt=""
            />
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Shivani pagare</h5>
            
            
          </div>
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnAddMore"
            defaultValue="Edit Profile"
          />
        </div>
      
      
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            {/* <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>Kshiti123</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>Kshiti Ghelani</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>kshitighelani@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Profession</label>
                </div>
                <div className="col-md-6">
                  <p>Web Developer and Designer</p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Experience</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Hourly Rate</label>
                </div>
                <div className="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Total Projects</label>
                </div>
                <div className="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>English Level</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div> 
              
              
            </div>*/}
            <div>{user}</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</>


        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
           Okk
          </Button>
        </Modal.Footer>
      </Modal>

        </Layout>
        </>
    );
};
export default Sidebar;