import React, { Component } from 'react';
import './Header.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      // Container for header content
      <div id="header">
        {/* Header background */}
        <div className="header-background"></div>
          {/* Header content container */}
          <div className="header-content">
            {/* Container for all text */}
            <div className="header-content-container">
              {/* Title text container */}
              <div className="title-container">
                {/* Title text on heading section */}
                <h1 className="title-text">I'm Emil Ottosson, an Swedish UI/UX designer currently based in Umeå, Sweden</h1>
              </div>
              {/* Sub-heading text container */}
              <div className="text-container">
                {/* Sub-heading text */}
                <h2 className="sub-heading-text">My process focuses on <span className="spandarkgray">creating</span> awesome stuff.<br />
                Think, google, stack overflow, fail. <span className="spandarkgray">Repeat.</span></h2>
              </div>
              {/* Heading buttons container */}
              <div className="buttons-container">
                {/* Heading Buttons */}
                <NavLink smooth exact to="/#portfolio" className="navLinkButtonContainer"><button type="button" className="btn btn-header">See selected projects</button></NavLink>
                <NavLink smooth exact to="/#workflow" className="navLinkButtonContainer"><button type="button" className="btn btn-header-right">More about my workflow</button></NavLink>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
