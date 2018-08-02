import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      // Container for header content
      <div className="header-container">
        {/* Header background */}
        <div className="header-background"></div>
          {/* Header content container */}
          <div className="header-content">
            {/* Container for all text */}
            <div className="header-content-container">
              {/* Title text container */}
              <div className="title-container">
                {/* Title text on heading section */}
                <h1 className="title-text">I'm Emil Ottosson, an Swedish designer currently based in Umeå, Sweden</h1>
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
                <button type="button" className="btn btn-header">See projects</button>
                <button type="button" className="btn btn-header-right">More about me</button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
