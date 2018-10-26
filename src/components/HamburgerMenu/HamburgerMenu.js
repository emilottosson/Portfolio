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
          <NavLink exact to="/#workflow-scroll-anchor" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={props.toggle} className="menu-text-small">Workflow</NavLink>
          <NavLink xact to="/#portfolio-scroll-anchor" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={props.toggle} className="menu-text-small">Portfolio</NavLink>
          <NavLink sxact to="/#about-scroll-anchor" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={props.toggle} className="menu-text-small">About</NavLink>
          <a className="menu-text-small" onClick={props.toggle} href="mailto:emil_ottosson@hotmail.com">Contact Me</a>
        </div>
      </div>
    );
}
