import React from 'react'
//import '../styles/dashboard.css'
import { Chart } from "react-google-charts";
import Sidebar from '@/pages/component/sidebar';
import {ShoppingCartOutlined ,BarChartOutlined,DollarOutlined ,UserOutlined } from '@ant-design/icons'
const dashboard = () => {
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  // bar chart
  const datas = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], 
  ];
  const option = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };
  return (
<>
<Sidebar>
    <div>
      
      <div className="container">
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Total Orders</p>
              <h4 className="my-1 text-info">4805</h4>
              <p className="mb-0 font-13">+2.5% from last week</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              {/* <i className="fa fa-shopping-cart" /> */}<i><ShoppingCartOutlined /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-danger">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Total Revenue</p>
              <h4 className="my-1 text-danger">$84,245</h4>
              <p className="mb-0 font-13">+5.4% from last week</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto">
              <i><DollarOutlined /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-success">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Bounce Rate</p>
              <h4 className="my-1 text-success">34.6%</h4>
              <p className="mb-0 font-13">-4.5% from last week</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
              <i><BarChartOutlined /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-warning">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Total Customers</p>
              <h4 className="my-1 text-warning">8.4K</h4>
              <p className="mb-0 font-13">+8.4% from last week</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
              <i><UserOutlined /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* charts */}

{/* <div className='container'>
  <div className='row'>
    <div className='col-md-4 col-xl-4'>Hello</div>
    <div className='col-md-4 col-xl-4'>Hello</div>
    <div className='col-md-4 col-xl-4'>Hello</div>

  </div>
</div> */}
<div class="flex-container">
  <div class="flex-item-first" style={{border:"1px solid gray"}}>

  <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      style={{fontSize:"10px"}}
      data={data}
      options={options}
    />

  </div>
  <div class="flex-item-second" style={{border:"1px solid gray"}}>

  <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
    
      data={datas}
      options={option}
    />

  </div>

   <div class="flex-item-third" style={{border:"1px solid gray"}}>
    <div style={{padding:"28px"}}>
   <table class="table table-striped" width={200}>
  <thead>
    <tr>
      <th style={{fontSize:"20px"}} scope="col">#</th>
      <th style={{fontSize:"20px"}} scope="col">First</th>
      <th style={{fontSize:"20px"}} scope="col">Last</th>
      <th style={{fontSize:"20px"}} scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">1</th>
      <td style={{fontSize:"20px"}}>Mark</td>
      <td style={{fontSize:"20px"}}>Otto</td>
      <td style={{fontSize:"20px"}}>@mdo</td>
    </tr>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">2</th>
      <td style={{fontSize:"20px"}}>Jacob</td>
      <td style={{fontSize:"20px"}}>Thornton</td>
      <td style={{fontSize:"20px"}}>@fat</td>
    </tr>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">3</th>
      <td style={{fontSize:"20px"}}>Larry</td>
      <td style={{fontSize:"20px"}}>the Bird</td>
      <td style={{fontSize:"20px"}}>@twitter</td>
    </tr>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">3</th>
      <td style={{fontSize:"20px"}}>Larry</td>
      <td style={{fontSize:"20px"}}>the Bird</td>
      <td style={{fontSize:"20px"}}>@twitter</td>
    </tr>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">3</th>
      <td style={{fontSize:"20px"}}>Larry</td>
      <td style={{fontSize:"20px"}}>the Bird</td>
      <td style={{fontSize:"20px"}}>@twitter</td>
    </tr>
    <tr>
      <th style={{fontSize:"20px"}} scope="row">3</th>
      <td style={{fontSize:"20px"}}>Larry</td>
      <td style={{fontSize:"20px"}}>the Bird</td>
      <td style={{fontSize:"20px"}}>@twitter</td>
    </tr>

  </tbody>
</table>
</div>
</div>
</div>


    </div>
    </Sidebar>
    </>
  )
}

export default dashboard;
