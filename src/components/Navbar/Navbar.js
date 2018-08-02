import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      // Navigation bar
      <div className="navbar-container">
        <div className="navbar">
          {/* Navbar heading container */}
          <div className="logo-container">
            {/* The heading on left in the navbar */}
            <a className="navbar-logo">EMIL OTTOSSON</a>
          </div>
          {/* Menu container */}
          <div className="menu-container">
            {/* The text on right in the menu */}
            <a className="menu-text">Workflow</a>
            <a className="menu-text">Portfolio</a>
            <a className="menu-text">About</a>
            {/* Contact me button in menu */}
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-menu">Contact Me</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
