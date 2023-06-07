import React, { useState, useEffect, useContext } from 'react';
import Home_menu from './home_menu';
import Profile_Page from './profile_page';
import './Body.css';
import { ViewModeContext } from '../contexts/View/view';

const Body = () => {
  const {state} = useContext(ViewModeContext);

  const ctx = useContext(ViewModeContext);
    console.log(ctx);
    return (
      <div>
        <h1>Keep at it!</h1>
        {/* <h1>{viewMode}</h1> */}
        {state.viewMode === 'home' && <Home_menu />}
        {state.viewMode === 'profile' && <Profile_Page />}
      </div>
    );
}


export default Body;