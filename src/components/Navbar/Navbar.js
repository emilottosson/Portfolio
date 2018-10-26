import React, { Component } from 'react';
import './Navbar.css';
import MenuToggleButton from '../HamburgerMenu/MenuToggleButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { NavHashLink as NavLink } from 'react-router-hash-link';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuOpen: false,
      mountedNavbar: false
    };
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
  }

  menuToggleClickHandler() {
    this.setState((prevState) => {
      return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen};
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        mountedNavbar: true,
      });
    }, 1800);
  }

  render() {

    var style1 = { 
      opacity: '1', 
      transition: 'opacity .5s ease-in-out, transform .5s ease-in-out', 
      transform: 'translateY(80px)'
    }
    var style2 = { 
      opacity: '0' 
    }

    return (
      <React.Fragment>
      {/* Navigation bar */}
      <div className="navbar-container" style={ this.state.mountedNavbar ? style1 : style2 }>
        <div className="navbar" >
          {/* Navbar logo container */}
          <div className="logo-container">
            {/* The logo on left in the navbar */}
            <NavLink smooth to="/#header" className="navbar-logo">EMIL OTTOSSON</NavLink>
          </div>
          {/* Menu container */}
          <div className="menu-container">
            {/* The menu text */}
            <NavLink smooth exact to="/#workflow" className="menu-text">Workflow</NavLink>
            <NavLink smooth exact to="/#portfolio" className="menu-text">Portfolio</NavLink>
            <NavLink smooth exact to="/#about" className="menu-text">About</NavLink>
            {/* Contact me button in menu */}
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-menu">Contact me</button></a>
          </div>
          <div className="hamburger-icon">
            <MenuToggleButton click={this.menuToggleClickHandler} shown={this.state.hamburgerMenuOpen}/>
          </div>
        </div>
      </div>
      <HamburgerMenu shown={this.state.hamburgerMenuOpen} toggle={this.menuToggleClickHandler} style={ this.state.mountedNavbar ? style1 : style2 }/>
      </React.Fragment>
    );
  }
}

export default Navbar;
