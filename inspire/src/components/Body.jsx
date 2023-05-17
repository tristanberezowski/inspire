import React, { useState, useEffect } from 'react';
import Home_menu from './home_menu';
import Profile_Page from './profile_page';
import './Body.css';

const Body = ( { viewMode, onProfileClick } ) => {

    return (
    <div>
        <h1>{viewMode}</h1>
      {viewMode === 'home' && <Home_menu onProfileClick={onProfileClick} />}
      {viewMode === 'profile' && <Profile_Page onProfileClick={onProfileClick} />}
    </div>
    );
}

export default Body;