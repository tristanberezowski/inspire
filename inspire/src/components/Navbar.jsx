import React from 'react';
import './Navbar.css';

const Navbar = ({ viewMode, onProfileClick, onHomeClick }) => {

  const homeClick = ()=>{
    onHomeClick()
  }

  return (
    <nav>
      <li onClick={homeClick}>Home</li>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;