import React, { Component } from 'react';
import './HamburgerMenu.css';

class HamburgerMenu extends Component {
  render() {
    return (
      // Container for navigation bar on small screens
      <div className="navbar-small">
        {/* Menu text container for small screens */}
        <div className="menu-container-small">
          {/* Menu text for small screens */}
          <a className="menu-text-small">Workflow</a>
          <a className="menu-text-small">Portfolio</a>
          <a className="menu-text-small">About</a>
          <a className="menu-text-small" href="mailto:emil_ottosson@hotmail.com">Contact Me</a>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
