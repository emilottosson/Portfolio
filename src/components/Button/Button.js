import React from 'react';
import './Button.css';

const Button = (props) => (
    <a href={props.buttonHref} className={`general-button ${props.color}`} style={props.buttonStyle} target="_blank" rel="noopener noreferrer">{props.buttonText}</a>
 );

 export default Button 