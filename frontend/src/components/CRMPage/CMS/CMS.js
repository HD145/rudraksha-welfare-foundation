import React from 'react'
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./CMS.module.css";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import logo from "../Reports/logo";
import axios from "axios";
export const CMS = () => {


  const [data,setData]=useState({
    action:"",
    services:"",
    type:"",
    to:"",
    from:"",
    pickup:"",
    drop:"",
    phone:"",
    trackingid:"",
    cost:"",
})

const upData=(e)=>{
  setData({
      ...data,
      [e.target.name]:e.target.value
  })
}

const handleSubmitCMS=(e)=>{
  e.preventDefault();
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/courier.routes/addCourier`,
          {
             volId:data.volId,
             amt:data.amount,
             donDate:data.date,
             orderId:data.orderId
          },{
              headers: {
                // "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("rudraksha")
                )}`,
              },
            }).then((res)=>{
              console.log(res);
          }).catch((err)=>{
              console.log(err);
          })
      }

  return (
    <>
    
    <div className={styles.DMS__main}>
        <div className={styles.DMS__shadow}>
        <div className={styles.DMS__head}>
            <img
              src="/RWFLOGO.png"
              alt="logo"
              width={90}
              className={styles.DMS__logo}
            />
            <div className={styles.DMS__form__heading}>
                 Courier Management System
            </div>
            
          </div>  
          <Form className={styles.DMS__form} onSubmit={handleSubmitCMS}>
        <div className={styles.DMS__form2}>
<Row>
<Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Action</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="action"
                    className="mb-3"
                    value={data.action}
                    onChange={upData}                      
                    required
                  >
                    <option>Choose Action</option>
                    <option>Inward</option>
                    <option>Outward</option>
                    
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="text"
                    name="to"
                    className="mb-3"
                    value={data.to}
                    onChange={upData}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="text"
                    name="from"
                    className="mb-3"
                    value={data.from}
                    onChange={upData}
                  />
                </Form.Group>
                
                <Form.Group as={Col} md="2" controlId="validationFormik01">
                  <Form.Label>Pickup Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="pickup"
                    className="mb-3"
                    value={data.pickup}
                    onChange={upData}
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationFormik01">
                  <Form.Label>Drop Location </Form.Label>
                  <Form.Control
                    type="text"
                    name="drop"
                    className="mb-3"
                    value={data.drop}
                    onChange={upData}
                  />
                </Form.Group>

                

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="type"
                    className="mb-3"
                    value={data.type}
                    onChange={upData}                      
                    required
                  >
                    <option>Choose Type</option>
                    <option>Official</option>
                    <option>Personal</option>
                    <option>Other</option>
                    
                  </Form.Select>
                </Form.Group>
</Row>




<Row>
<Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Courier Service</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="services"
                    className="mb-3"
                    value={data.services}
                    onChange={upData}                      
                    required
                  >
                    <option>IndiaPost</option>
                    <option>Ecom Express</option>
                    <option>Choose Service</option>
                    <option>Xpressbees</option>
                    <option>Delhivery</option>
                    <option>EKart</option>
                    <option>ShipRocket</option>
                    <option>Dotzot</option>
                    <option>Fedex</option>
                    <option>BlueDart</option>
                    <option>Gati</option>
                    <option>DTDC</option>
                    
                  </Form.Select>
                </Form.Group>

  
<Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Courier Cost </Form.Label>
                  <Form.Control
                    type="text"
                    name="cost"
                    className="mb-3"
                    value={data.cost}
                    onChange={upData}
                  />
                  

                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Delivery Agent Phone Number </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    className="mb-3"
                    value={data.phone}
                    onChange={upData}
                  />
                 
                </Form.Group>
                
</Row>


<Row>


  
            <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Tracking Id </Form.Label>
                  <Form.Control
                    type="text"
                    name="trackingid"
                    className="mb-3"
                    value={data.trackingid}
                    onChange={upData}
                  />
                  

                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                <label class="form-label" for="validationFormik01">Picture of the package</label>
                <input name="firstVaccinationDate" required="" type="file" id="validationFormik01" class="form-control"></input>
                 
                </Form.Group>

                
                  
                
</Row>

        </div>
        <div className="text-center">
          <Button className="btn btn-primary mb-3" type="submit">Submit</Button>  
        </div>
        </Form>
        </div>
    </div>
    
    </>
  )
}
