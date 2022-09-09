import React from "react";
import "./Nav.css";

function Navbar() {
  return (
<>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-0 .nav-fill w-100">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/agenda">Agenda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/aboutus">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Corevalues">Core Values</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/mission">Mission</a>
      </li>
      
      
     
      
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Project
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/pro1">1. Art,Literature,Culture & Religion</a>
          <a class="dropdown-item" href="/pro2">2. Blood Donation</a>
          <a class="dropdown-item" href="/pro3">3. Drug De-Addiction</a>
          <a class="dropdown-item" href="/pro4">4. Environment Armour</a>
          <a class="dropdown-item" href="/pro5">5. Gender Justice</a>
          <a class="dropdown-item" href="/pro6">6. Gracious Justice</a>
          <a class="dropdown-item" href="/pro7">7. Human Rights</a>
          <a class="dropdown-item" href="/pro8">8. Old Age,Orphanage & Blind Home</a>
          <a class="dropdown-item" href="/pro9">9. Sports Training Support</a>
          <a class="dropdown-item" href="/pro10">10. True Eternal Warriors</a>
          <a class="dropdown-item" href="/pro11">11. Training and Skill Enhancement</a>
          <a class="dropdown-item" href="/pro12">12. True Wisdom Devotees</a>
          <a class="dropdown-item" href="/pro13">13. Vigour and Vitality</a>
          <a class="dropdown-item" href="/pro14">14. Voiceless Souls Protection</a>
          <a class="dropdown-item" href="/pro15">15. Woman Empowerment</a>
          
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Organiogram
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/organigram">Organiogram</a>
          <a class="dropdown-item" href="/management">Management</a>
          <a class="dropdown-item" href="/coc">Code Of Conduct</a>
          
          
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Career
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/rec">Recruitments</a>
          <a class="dropdown-item" href="/loginI">Interview Form</a>
          <a class="dropdown-item" href="/loginJ">Joining Form</a>
          
          
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/refp">Refund Policy</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/organigram">Numero</a>
          <a class="dropdown-item" href="/management">Employee</a>
          <a class="dropdown-item" href="/crm">RMS</a>
          
          
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/crmlogin">CRM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/faq">FAQ</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#Fp">Contact Us</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/survey">Survey</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="/survey">Support Us</a>
      </li> */}
  
    </ul>
    
  </div>
</nav>





</>


    
  );
}

export default Navbar;
