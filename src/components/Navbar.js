import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
        
{/* <ul>
<li><NavLink to="/"> Login </NavLink> </li>

    <li><NavLink to="/register"> Register </NavLink> </li>
    <li><NavLink to="/about"> About </NavLink> </li>


</ul> */}


<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">        <NavLink  style={{textDecorationLine:'none'}} className="nav-link" to="/"> Login </NavLink> 
</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">        <NavLink  className="nav-link" to="/home"> Home </NavLink> 
</a>
        </li> */}

        <li className="nav-item">
          <a className="nav-link" href="#">        <NavLink  className="nav-link" to="/register"> Register </NavLink> 
</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">        <NavLink  className="nav-link" to="/about"> About </NavLink> 
</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar