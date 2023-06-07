import React, { useState, useEffect } from 'react';
import Home_menu from './home_menu';
import Profile_Page from './profile_page';
import './Body.css';
import { ViewProvider } from "../contexts/View/view"

const Body = ( { viewMode, onProfileClick } ) => {

    return (
    <ViewProvider>
      <div>
        <h1>{viewMode}</h1>
        {viewMode === 'home' && <Home_menu onProfileClick={onProfileClick} />}
        {viewMode === 'profile' && <Profile_Page onProfileClick={onProfileClick} />}
      </div>
    </ViewProvider>
    );
}


export default Body;