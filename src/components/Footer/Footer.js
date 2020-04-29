import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      // Workflow section
      <div id="footer">
          <div className="footer-container">
            <a href="mailto:emil@emilottosson.com">Drop me a line!</a>
            <hr />
            <div className="socials-container">
              <a className="social email" href="mailto:emil@emilottosson.com">{null}</a>
              <a className="social medium" href="https://medium.com/@emilottosson" target="_blank" rel="noopener noreferrer">{null}</a>
              <a className="social linkedin" href="https://www.linkedin.com/in/emil-ottosson" target="_blank" rel="noopener noreferrer">{null}</a>
            </div>
            <p><strong>© 2020 Emil Ottosson</strong></p>
          </div>
      </div>
    )
  }
}

export default Footer;