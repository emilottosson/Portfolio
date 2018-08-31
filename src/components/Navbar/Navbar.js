import React, { Component } from 'react';
import './Navbar.css';
import MenuToggleButton from '../HamburgerMenu/MenuToggleButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { NavHashLink as NavLink } from 'react-router-hash-link';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuOpen: false
    };
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
  }

  menuToggleClickHandler() {
    this.setState((prevState) => {
      return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen};
    });
  };

  render() {

    return (
      <React.Fragment>
      {/* Navigation bar */}
      <div className="navbar-container">
        <div className="navbar">
          {/* Navbar logo container */}
          <div className="logo-container">
            {/* The logo on left in the navbar */}
            <NavLink smooth to="../Header/Header#header-container" className="navbar-logo">EMIL OTTOSSON</NavLink>
          </div>
          {/* Menu container */}
          <div className="menu-container">
            {/* The menu text */}
            <NavLink smooth to="../Workflow/Workflow#workflow-container" className="menu-text" activeClassName="active">Workflow</NavLink>
            <NavLink smooth to="../Header/Header#header-container" className="menu-text" activeClassName="active">Portfolio</NavLink>
            <NavLink smooth to="../Header/Header#header-container" className="menu-text" activeClassName="active">About</NavLink>
            {/* Contact me button in menu */}
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-menu">Contact Me</button></a>
          </div>
          <div className="hamburger-icon">
            <MenuToggleButton click={this.menuToggleClickHandler} shown={this.state.hamburgerMenuOpen}/>
          </div>
        </div>
      </div>
      <HamburgerMenu shown={this.state.hamburgerMenuOpen}/>
      </React.Fragment>
    );
  }
}

export default Navbar;
