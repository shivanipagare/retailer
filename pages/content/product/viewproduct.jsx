import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
const Viewproduct = (props) => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [viewData, getviewData] = useState([])

    const viewProduct = async (pid) => {
        
        const api = await axios.get(
            `http://localhost:5500/shopprodectdesc/${pid}`
        );

        getviewData(api.data.response)
        console.log(api.data.response, "ho gya")
        //console.log(userId)
        setLgShow(true);
    }

    return (
        <div>
            <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => viewProduct(props.pid)}>
                view
            </button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" >
                        <h4>Product Id:</h4> <h4 style={{ color: "blue" }}>{props.pid}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Table striped bordered hover>
                            {
                                viewData.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>Model Name</td>
                                                <td>{item.modelname}</td>

                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{item.description}</td>

                                            </tr>
                                            <tr>
                                                <td>Color</td>
                                                <td>{item.color}</td>

                                            </tr>
                                            <tr>
                                                <td>Size</td>
                                                <td>{item.size}</td>

                                            </tr>
                                            <tr>
                                                <td>Weight</td>
                                                <td>{item.weight}</td>

                                            </tr>
                                            <tr>
                                                <td>mfg</td>
                                                <td>{item.mfg}</td>

                                            </tr>
                                            <tr>
                                                <td>Expiry date</td>
                                                <td>{item.expirydate}</td>

                                            </tr>


                                        </tbody>

                                        // <tbody key={index}>
                                        //   <tr>
                                        //     <td>{item.roleid}</td>
                                        //     <td>{item.rolename}</td>
                                        //     <td><Button variant='danger' onClick={() => deleteRoleAssignData(props.userId,item.roleid)} style={{ width: "10px",paddingLeft:"20px" }}><ImCross /></Button></td>
                                        //   </tr>
                                        // </tbody>
                                    )
                                })
                            }


                        </Table>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Viewproduct
