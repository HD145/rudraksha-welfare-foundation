import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import activestatus from "./activestatus"
import axios from "axios";
// import styles1 from "./Login.module.css";
// import logo from "../Reports/logo";

import styles from "./Home.module.css";
const Home = () => {


  const [data,setData]=useState({
    empId:"",
    password:""
  })
  const [error, setError] = useState("");
  const [btndisable, setDisable] = useState(false);

  const navigate = useHistory();

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("rudraksha"))) {
  //     navigate.push("/crm");
  //   }
  // }, []);


  // const navigate = useHistory();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("rudraksha"))) {
      return navigate.push("/crmlogin");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate.push("/crmlogin");
  };

  const [status, setstatus] = useState("");
  
  const statusset=()=>{
    setstatus("active")
  }
 
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <a class="navbar-brand" href="/crm">CRM PAGE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto justify-content-between w-100">
      <li class="nav-item">
        <a class="nav-link" href="/rms" onClick={statusset}>RMS </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/PMS">PMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/LMS">LMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AMS">AMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addEmployee">EMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addVendor">VMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/VIMS">VIMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/NMS">NMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/DMS">DMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/CMS">CMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/SMS">SMS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Memo">Memo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addEvent">Add Event</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/costsheet">Cost Sheet</a>
      </li>
     
      <li class="nav-item mr-10 ">
        <a class="nav-link" onClick={logout}>Log Out</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Register">Register</a>
        {/* <a class="nav-link" data-toggle="modal" data-target="#myModal">Register</a> */}
      </li>
    </ul>
    </div>
  


        {/* <Container>
          <Navbar.Brand href="/crm">CRM PAGE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/rms" className={styles.crm__nav}>
              RMS
            </Nav.Link>
            <Nav.Link href="/PMS" className={styles.crm__nav}>
              PMS
            </Nav.Link>
            <Nav.Link href="/LMS" className={styles.crm__nav}>
              LMS
            </Nav.Link>
            <Nav.Link href="/AMS" className={styles.crm__nav}>
              AMS
            </Nav.Link>

            <Nav.Link href="/addEmployee" className={styles.crm__nav}>
              EMS
            </Nav.Link>
            <Nav.Link href="/addVendor" className={styles.crm__nav}>
              VMS
            </Nav.Link>
            <Nav.Link href="/VIMS" className={styles.crm__nav}>
              VIMS
            </Nav.Link>
            <Nav.Link href="/NMS" className={styles.crm__nav}>
              NMS
            </Nav.Link>
            <Nav.Link href="/DMS" className={styles.crm__nav}>
              DMS
            </Nav.Link>
            <Nav.Link href="/SMS" className={styles.crm__nav}>
              SMS
            </Nav.Link>
            <Nav.Link href="/Memo" className={styles.crm__nav}>
              Memo
            </Nav.Link>
            <Nav.Link href="/addEvent" className={styles.crm__nav}>
              Add Event
            </Nav.Link>
            <Nav.Link href="/costsheet" className={styles.crm__nav}>
              Cost Sheet
            </Nav.Link>
            <Nav.Link className={styles.crm__nav} onClick={logout}>
              Log Out
            </Nav.Link>
            <Nav.Link  href="/Register" className={styles.crm__nav} >
               Register
            </Nav.Link>
            
          </Nav>
        </Container> */}
      </nav>
      <div className={styles.crm__img}></div>

  


    </>
  );
};
export default Home;
