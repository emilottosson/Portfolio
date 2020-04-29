import React, { Component } from 'react';
import './Navbar.css';
import MenuToggleButton from '../HamburgerMenu/MenuToggleButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Resume from "../../pdfs/Emil-Ottosson-Resume-Dark.pdf";
import { Link } from "react-scroll";


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
    this.setState( {
      hamburgerMenuOpen: !this.state.hamburgerMenuOpen
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
          <div className="hamburger-icon">
            <MenuToggleButton click={this.menuToggleClickHandler} shown={this.state.hamburgerMenuOpen}/>
          </div>
          {/* Navbar logo container */}
          <div className="logo-container">
            {/* The logo on left in the navbar */}
            <Link activeClass="active" className="navbar-logo" to="header" spy={true} smooth={true} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              EMIL OTTOSSON
            </Link>
          </div>
          {/* Menu container */}
          <div className="menu-container">
            {/* The menu text */}
            <Link activeClass="active" className="menu-text" to="workflow-anchor" spy={true} smooth={true} offset= {-80} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Workflow
            </Link>
            <Link activeClass="active" className="menu-text" to="portfolio" spy={true} smooth={true} offset= {-80} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Portfolio
            </Link>
            <Link activeClass="active" className="menu-text" to="about-container" spy={true} smooth={true} offset= {-80} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              About
            </Link>
            <Link activeClass="active" className="menu-text" to="articles" spy={true} smooth={true} offset= {-80} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              Articles
            </Link>
            {/* Resume button in menu */}
            <a href={Resume} target="_blank" rel="noopener noreferrer"><button type="button" className="btn-green btn-menu-resume">Resume</button></a>
            {/* Contact me button in menu */}
            <a href="mailto:emil@emilottosson.com"><button type="button" className="btn-red btn-menu">Contact me</button></a>
          </div>
        </div>
      </div>
      <HamburgerMenu shown={this.state.hamburgerMenuOpen} toggle={this.menuToggleClickHandler} style={ this.state.mountedNavbar ? style1 : style2 }/>
      </React.Fragment>
    );
  }
}

export default Navbar;
