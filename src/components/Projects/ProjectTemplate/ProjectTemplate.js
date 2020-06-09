import React, { Component } from 'react';
import './ProjectTemplate.css';
import email from '../../../svgs/email-icon.svg';
import medium from '../../../svgs/medium-icon.svg';
import linkedin from '../../../svgs/linkedin-icon.svg';
import Button from '../../Button/Button';

class ProjectTemplate extends Component {

  constructor(props) {
      super(props)
      this.state = {

      };
    }

  render() {

    return (
      <div>
      <header className={`${this.props.mainColor}`} style={this.props.backgroundImage}>
        {/* ADD OVERLAY TO BACKGROUND */}
        {/* <div className={`project-template-overlay ${this.props.mainColor}`} /> */}
      </header>
      <div id="projectTemplate">
        {this.props.content}
        <section id="nextProject" className={`${this.props.nextProjectBackgroundColor}`}>
          <h2 className="noMargin mainText">Next Project</h2>
          <h3>{this.props.nextProjectName}</h3>
          <div className="button-container">
            <div className="button-first">
              <Button 
                color={this.props.homepageButtonColor}
                buttonText={this.props.homepageButtonText}
                buttonHref={this.props.homepageButtonHref}
              />
            </div>
            <div className="button-second">
              <Button 
                color={this.props.nextButtonColor}
                buttonText={this.props.nextButtonText}
                buttonHref={this.props.nextButtonHref}
              />
            </div>
          </div>
        </section>
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