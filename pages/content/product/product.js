import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { RetailerContext } from '@/pages/context/retailerContext'
import Viewproduct from './viewproduct'
import Edit from './edit'
const Product = () => {

  //for pagination
  const { retailerID } = useContext(RetailerContext);
  const [productData, setProductData] = useState([])
  const getData = async () => {
    let api = await axios.get(`http://localhost:5500/shopproduct/${retailerID}`)
    console.log(retailerID)
    setProductData(api.data.response)
    // console.log(categoryapi.data.response)
  }

  useEffect(() => {
    getData()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(productData.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  return (

    <>

      <table className="table align-middle mb-0 bg-white" >
        <thead className="bg-light">
          <tr>
            <th>Product Id</th>
           
            <th>price</th>
            <th>Quantity</th>
            <th>subcategoryId</th>
            <th>product Name</th>
            <th>company</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">

                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.pid}</p>

                      </div>
                    </div></td>
                  

                  <td>
                    <p className="fw-normal mb-1">{item.price}</p>

                  </td>
                  <td>
                    <div className="d-flex align-items-center">

                      <div className="ms-3">
                        <p className=" mb-1">{item.available_quantity}</p>

                      </div>
                    </div>

                  </td>
                  <td> <div className="d-flex align-items-center">

                    <div className="ms-3">
                      <p className="fw-bold mb-1">{item.subcategory_id}</p>

                    </div>
                  </div></td>
                  <td> <div className="d-flex align-items-center">

                    <div className="ms-3">
                      <p className=" mb-1">{item.item_name}</p>

                    </div>
                  </div></td>
                  <td><p>{item.company}</p></td>
                  <td><img
                    src={item.image}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  /></td>
                  <td>
                    {/* <button type="button" className="btn btn-link btn-sm btn-rounded">
                      View
                    </button> */}
                    <Viewproduct pid={item.pid}/>
                    {/* <button type="button" className="btn btn-link btn-sm btn-rounded">
                      Edit
                    </button> */}
                    <Edit pid={item.pid}/>

                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


      {/* for pagination */}


      <nav aria-label="Page navigation example ">
        <ul className="pagination m-5">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous" onClick={perPage}>
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a className="page-link" href="#"
                  onClick={() => changeCpage(n)}>
                  {n}
                </a>
              </li>
            ))
          }

          <li className="page-item" >
            <a className="page-link" href="#" aria-label="Next" onClick={nextPage}>
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>

    </>

  )
  function perPage() {
    if (currentPage !== firstIndex)
      setCurrentPage(currentPage - 1)
  }
  function changeCpage(pid) {
    setCurrentPage(pid)
  }
  function nextPage() {
    if (currentPage !== firstIndex)
      setCurrentPage(currentPage + 1)
  }
}

export default Product
