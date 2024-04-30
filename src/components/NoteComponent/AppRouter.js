// App.js
import React from 'react';
import '../css/App.css';
import Header from './Header';
import Notes from './Notes';
import { NavLink } from 'react-router-dom';

function AppRouter() {
  return (
    <div className="main">
      <Header />
      <Notes />
      <NavLink to="/CommunautePage" className="communaute-button">
        Communaute
      </NavLink>
    </div>
  );
}

export default AppRouter;
