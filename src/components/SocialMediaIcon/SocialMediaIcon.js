import React from 'react';
import './SocialMediaIcon.css';

const SocialMediaIcon = (props) => (
    <a className="social" style={props.socialMediaIcon} href={props.socialMediaHref} target="_blank" rel="noopener noreferrer">{null}</a>
 );

 export default SocialMediaIcon 