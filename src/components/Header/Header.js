import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-scroll";

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mountedHeaderOverlay: false,
      mountedHeaderTitle: false,
      mountedHeaderText: false,
      mountedHeaderButtons: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        mountedHeaderOverlay: true,
      });
    }, 600);
    setTimeout(() => {
      this.setState ({
        mountedHeaderTitle: true,
      });
    }, 1400);
    setTimeout(() => {
      this.setState ({
        mountedHeaderText: true,
      });
    }, 1600);
    setTimeout(() => {
      this.setState ({
        mountedHeaderButtons: true,
      });
    }, 1800);
  }

  render() {

    var style1 = { 
      opacity: '1', 
      transition: 'opacity .5s ease-in-out, transform .5s ease-in-out', 
      transform: 'translateY(5px)' 
    }
    var style2 = { 
      opacity: '0' ,
      transition: 'opacity .7s ease-in-out'
    }
    var style3 = { 
      opacity: '1', 
    }

    return (
      // Container for header content
      <div id="header">
        {/* Header background */}
        <div className="header-background"></div>
        <div className="header-gradient"></div>
        <div className="header-overlay" style={ this.state.mountedHeaderOverlay ? style2 : style3 }></div>
          {/* Header content container */}
          <div className="header-content">
            {/* Container for all text */}
            <div className="header-content-container">
              {/* Title text container */}
              <div className="title-container" style={ this.state.mountedHeaderTitle ? style1 : style2 }>
                {/* Title text on heading section */}
                <h1 className="title-text">I´m Emil Ottosson, an Swedish <span className="no-break">front-end</span> developer currently based in Umeå, Sweden</h1>
              </div>
              {/* Sub-heading text container */}
              <div className="text-container" style={ this.state.mountedHeaderText ? style1 : style2 }>
                {/* Sub-heading text */}
                <h2 className="sub-heading-text">I focus on <span className="spandarkgray">creating</span> awesome stuff.<br />
                Define, build, launch, analyze. <span className="spandarkgray">Repeat.</span></h2>
              </div>
              {/* Heading buttons container */}
              <div className="buttons-container" style={ this.state.mountedHeaderButtons ? style1 : style2 }>
                {/* Heading Buttons */}
                <Link className="navLinkButtonContainer" to="portfolio" spy={true} smooth={true} offset= {-80} duration= {500}>
                <button type="button" className="btn btn-header">See selected projects</button>
                </Link>
                <Link className="navLinkButtonContainer" to="workflow" spy={true} smooth={true} offset= {-80} duration= {500}>
                  <button type="button" className="btn btn-header-right">More about my workflow</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
