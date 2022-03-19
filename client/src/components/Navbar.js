import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar=()=>{
  const abc =()=> window.alert('You have Logged Out');
    return (
        <nav id="nav" class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <NavLink id="gennxt" className="nav-link active" aria-current="page" to="/">GenNxt</NavLink>
    <button id="but" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span id="z" class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className='navlink' class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='navlink' class="nav-link active" aria-current="page" to="/mycourses">My Courses</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='navlink' class="nav-link active" aria-current="page" to="/register">Register</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='navlink' class="nav-link active" aria-current="page" to="/login">Log In</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='navlink' class="nav-link active" aria-current="page" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
        <NavLink id='logout' className='navlink' onClick={abc} class="nav-link active" aria-current="page" to="/logout">Log Out</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};
export default Navbar;