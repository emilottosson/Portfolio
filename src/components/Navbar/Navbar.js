import React, { Component } from 'react';
import './Navbar.css';
import MenuToggleButton from '../HamburgerMenu/MenuToggleButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Resume from "../../pdfs/Emil-Ottosson-Resume-Dark.pdf";
import { Link } from "react-scroll";
import Button from '../Button/Button';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuOpen: false,
      mountedNavbar: false,
      hamburgerMenuItem1Shown: false,
      hamburgerMenuItem2Shown: false,
      hamburgerMenuItem3Shown: false,
      hamburgerMenuItem4Shown: false,
      hamburgerMenuItem5Shown: false,
      hamburgerMenuItem6Shown: false,
    };
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
  }

  menuToggleClickHandler() {
    if(!this.state.hamburgerMenuOpen) {
      setTimeout(() => {
        console.log("hej")
        this.setState ({
          hamburgerMenuItem1Shown: true,
        });
      }, 100);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem2Shown: true,
        });
      }, 200);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem3Shown: true,
        });
      }, 300);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem4Shown: true,
        });
      }, 400);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem5Shown: true,
        });
      }, 500);
      setTimeout(() => {
        this.setState ({
          hamburgerMenuItem6Shown: true,
        });
      }, 600);
    } else {
      this.setState ({
        hamburgerMenuItem1Shown: false,
        hamburgerMenuItem2Shown: false,
        hamburgerMenuItem3Shown: false,
        hamburgerMenuItem4Shown: false,
        hamburgerMenuItem5Shown: false,
        hamburgerMenuItem6Shown: false,
      });
    }
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
      <div className="navbar-container" style={ this.state.mountedNavbar ? style1 : style2 }>
        <div className="navbar" >
          <div className="hamburger-icon">
            <MenuToggleButton click={this.menuToggleClickHandler} shown={this.state.hamburgerMenuOpen}/>
          </div>
          <div className="logo-container">
            <Link activeClass="active" className="navbar-logo" to="header" spy={true} smooth={true} duration= {500} onClick={ () => this.setState({hamburgerMenuOpen: false})}>
              EMIL OTTOSSON
            </Link>
          </div>
          <div className="menu-container">
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
            <Button 
              color="green"
              buttonText="Resume"
              buttonStyle={{padding: '11px 20px', marginRight: '8px'}}
              buttonHref={Resume}
            />
            <Button 
              color="red"
              buttonText="Contact me"
              buttonStyle={{padding: '11px 20px'}}
              buttonHref="mailto:emil@emilottosson.com"
            />
          </div>
        </div>
      </div>
      <HamburgerMenu 
        shown={this.state.hamburgerMenuOpen} 
        hamburgerMenuItem1Shown={this.state.hamburgerMenuItem1Shown} 
        hamburgerMenuItem2Shown={this.state.hamburgerMenuItem2Shown}
        hamburgerMenuItem3Shown={this.state.hamburgerMenuItem3Shown}
        hamburgerMenuItem4Shown={this.state.hamburgerMenuItem4Shown}
        hamburgerMenuItem5Shown={this.state.hamburgerMenuItem5Shown}
        hamburgerMenuItem6Shown={this.state.hamburgerMenuItem6Shown}
        toggle={this.menuToggleClickHandler} 
        style={ this.state.mountedNavbar ? style1 : style2 }/>
      </React.Fragment>
    );
  }
}

export default Navbar;
