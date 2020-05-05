import React, { Component } from 'react';
import './Footer.css';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';
import email from '../../svgs/email-icon.svg';
import medium from '../../svgs/medium-icon.svg';
import linkedin from '../../svgs/linkedin-icon.svg';

class Footer extends Component {

  render() {
    return (
      <div id="footer">
          <div className="footer-container">
            <a href="mailto:emil@emilottosson.com">Drop me a line!</a>
            <hr />
            <div className="socials-container">
              <SocialMediaIcon 
                socialMediaIcon={{backgroundImage: `url(${email})`}}
                socialMediaHref="mailto:emil@emilottosson.com"
              />
              <SocialMediaIcon 
                socialMediaIcon={{backgroundImage: `url(${medium})`}}
                socialMediaHref="https://medium.com/@emilottosson"
              />
              <SocialMediaIcon 
                socialMediaIcon={{backgroundImage: `url(${linkedin})`}}
                socialMediaHref="https://www.linkedin.com/in/emil-ottosson/"
              />
            </div>
            <p><strong>© 2020 Emil Ottosson</strong></p>
          </div>
      </div>
    )
  }
}

export default Footer;