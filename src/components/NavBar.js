import React from 'react';
import './Navbar.css'; // Create this file for styling if needed

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Inclusive Keyboard</h1>
      <h2>Welcome to our application where you can create your own personalized fonts!</h2>
      <div className="links">
        <a href="/">Home</a>
        <br></br>
        <a href="/About">About Page</a>
        <br/>
        <a href="/Create">Create New Font</a>
        <br/>
        <a href="/MyFonts">My Fonts</a>
      </div>

    </div>
  );
};

export default Navbar;