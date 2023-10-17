import React from 'react';
import './Navbar.css';
import { ViewModeContext } from '../contexts/View/view';

const Navbar = () => {

  return (
    <nav>
      <li>Home</li>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;