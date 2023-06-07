import React, { useState } from 'react';
import './profile_page.css';

const Profile_page = () => {

    return (
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
      </div>
    );
}

export default Profile_page;