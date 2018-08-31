import React from 'react';
import './HamburgerMenu.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function HamburgerMenu(props) {
    return (
      // Container for navigation bar on small screens
      <div className={"navbar-small " + (props.shown ? "shown" : "")}>
        {/* Menu text container for small screens */}
        <div className={"menu-container-small " + (props.shown ? "shown" : "")}>
          {/* Menu text for small screens */}
          <NavLink smooth to="../Workflow/Workflow#workflow-container" activeClassName="selected" className="menu-text-small">Workflow</NavLink>
          <NavLink smooth to="../Header/Header#header-container" activeClassName="selected" className="menu-text-small">Portfolio</NavLink>
          <NavLink smooth to="../Header/Header#header-container" activeClassName="selected" className="menu-text-small">About</NavLink>
          <a className="menu-text-small" href="mailto:emil_ottosson@hotmail.com">Contact Me</a>
        </div>
      </div>
    );
}
