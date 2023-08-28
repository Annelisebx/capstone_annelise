import React from 'react';
import './Navbar.css'; // Create this file for styling if needed
import About from './About';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My Application // Title of Inclusive Keyboar Site</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/About">About Page</a>
      </div>

    </div>
  );
};

export default Navbar;