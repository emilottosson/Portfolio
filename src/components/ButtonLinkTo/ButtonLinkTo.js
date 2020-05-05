import React from 'react';
import './ButtonLinkTo.css';
import { Link } from "react-scroll";

const ButtonLinkTo = (props) => (
    <Link className="navLinkButtonContainer" to={props.linkTo} spy={true} smooth={true} offset= {-55} duration= {500}>
    <button className={`button-link-to ${props.color}`} style={props.buttonStyle} target="_blank" rel="noopener noreferrer">{props.buttonText}</button>
    </Link>
 );

 export default ButtonLinkTo 