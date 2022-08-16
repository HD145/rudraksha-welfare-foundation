import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "./Footer.css";
export default function FooterPagePro() {
  return (
    
    
       
<div>
    <footer class="footer" id="Fp">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span style={{"font-weight":"bold;"}}> About the company</span> A Section 8 Company (Non Profit Organization) under Companies Act 2013, Ministry of Corporate Affairs, Govt. of INDIA.
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p>Office No. 754, Cabin No. 9, First Floor, Mohalla Dehra Sahib,Near NAC Manimajra Chandigarh, UT:160101</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    {/* <h2> Company<span> logo</span></h2> */}
    <img src={require('../../Images/LogoLoad.jpeg')} ></img> <span className='footerspan'>Rudraksha Welfare Foundation</span>
    {/* <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p> */}
    <p class="name">&copy;Copyright 2022 RUDRAKSHA- All rights reserved.</p>
  </div>
</footer>

</div>

  );
}