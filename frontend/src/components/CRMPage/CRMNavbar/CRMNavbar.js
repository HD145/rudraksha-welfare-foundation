import React from 'react'
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import styles from "./Home.module.css";

const CRMNavbar = () => {
  const navigate = useHistory();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("rudraksha"))) {
      return navigate.push("/crmlogin");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate.push("/crmlogin");
  };

  

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
  <a class="nav-link" href="/rms" >RMS </a>
  
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
<li class="nav-item">
  <a class="nav-link" onClick={logout}>Log Out</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/Register">Register</a>
</li>
</ul>

</div>

</nav>
{/* <div className={styles.crm__img}></div> */}

    </>
  )
}

export default CRMNavbar