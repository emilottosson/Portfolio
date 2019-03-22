import React from 'react';
import './HamburgerMenu.css';
import { Link } from "react-scroll";

export default function HamburgerMenu(props) {
    return (
      // Container for navigation bar on small screens
      <div className={"navbar-small " + (props.shown ? "shown" : "")}>
        {/* Menu text container for small screens */}
        <div className={"menu-container-small " + (props.shown ? "shown" : "")}>
          {/* Menu text for small screens */}
          <Link activeClass="active" className="menu-text-small" to="workflow" spy={true} smooth={true} offset= {-55} duration= {500} onClick={props.toggle}>
              Workflow
            </Link>
            <Link activeClass="active" className="menu-text-small" to="portfolio" spy={true} smooth={true} offset= {-55} duration= {500} onClick={props.toggle}>
              Portfolio
            </Link>
            <Link activeClass="active" className="menu-text-small" to="about1-container" spy={true} smooth={true} offset= {-55} duration= {500} onClick={props.toggle}>
              About
            </Link>
          <a className="menu-text-small" onClick={props.toggle} href="mailto:emil_ottosson@hotmail.com">Contact Me</a>
        </div>
      </div>
    );
}
