import React, { Component } from 'react';
import './Navbar.css';
import MenuToggleButton from '../HamburgerMenu/MenuToggleButton';

class Navbar extends Component {
  render() {
    return (
      // Navigation bar
      <div className="navbar-container">
        <div className="navbar">
          {/* Navbar logo container */}
          <div className="logo-container">
            {/* The logo on left in the navbar */}
            <a className="navbar-logo">EMIL OTTOSSON</a>
          </div>
          {/* Menu container */}
          <div className="menu-container">
            {/* The menu text */}
            <a className="menu-text">Workflow</a>
            <a className="menu-text">Portfolio</a>
            <a className="menu-text">About</a>
            {/* Contact me button in menu */}
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-menu">Contact Me</button></a>
          </div>
          <div className="hamburger-icon">
            <MenuToggleButton click={this.props.hamburgerClickHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
