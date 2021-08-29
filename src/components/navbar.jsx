//STATELESS FUNCTIONAL COPONENT
import React, { Component } from 'react';

const NavBar = (props) => {
  return ( <nav className="navbar navbar-light bg-light">
       
  <a className="navbar-brand"  
    href="#" > NavBar
    <span className="badge badge-pill m-2 badge-secondary">
      {props.dispNav()}
    </span>
  </a>

</nav> );
}
 
export default NavBar;
