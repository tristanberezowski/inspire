import React, { useState } from 'react';
import './home_menu.css';

const Home_menu = () => {

    return (
      <div>
        <h1>Welcome to Inspire</h1>
      <div className="container">
        <div className="logo">
            <a href="page1.html">
            <img src="maleavatarlogo.png" alt="Male Avatar" />
            </a> 
        </div>
        <div className="logo">
            <a href="page2.html">
            <img src="femaleavatarlogo.png" alt="Female Avatar"/>
            </a>
        </div>
        <div className="logo">
            <a href="page3.html">
            <img src="maleavatarlogo.png" alt="Logo 3"/>
            </a>
        </div>
      </div>
      </div>
    );
}

export default Home_menu;