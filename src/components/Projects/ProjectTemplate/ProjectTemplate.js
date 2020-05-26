import React, { Component } from 'react';
import './ProjectTemplate.css';
import email from '../../../svgs/email-icon.svg';
import medium from '../../../svgs/medium-icon.svg';
import linkedin from '../../../svgs/linkedin-icon.svg';

class ProjectTemplate extends Component {

  constructor(props) {
      super(props)
      this.state = {

      };
    }

  render() {

    return (
      <div>
      <header>
        
      </header>
      <div id="projectTemplate">

        <div id="footer">
            <div className="footer-container">
                <a href="mailto:emil@emilottosson.com">Drop me a line!</a>
                <hr/>
                <div className="socials-container">
                    <a className="social" style={{backgroundImage: `url(${email})`}} href="mailto:emil@emilottosson.com" target="_blank" rel="noopener noreferrer">{null}</a>
                    <a className="social" style={{backgroundImage: `url(${medium})`}} href="https://medium.com/@emilottosson" target="_blank" rel="noopener noreferrer">{null}</a>
                    <a className="social" style={{backgroundImage: `url(${linkedin})`}} href="https://www.linkedin.com/in/emil-ottosson/" target="_blank" rel="noopener noreferrer">{null}</a>
                </div>
                <p><strong>© 2020 Emil Ottosson</strong></p>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ProjectTemplate;