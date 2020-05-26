import React, { Component } from 'react';
import './Footer.css';
import email from '../../svgs/email-icon.svg';
import medium from '../../svgs/medium-icon.svg';
import linkedin from '../../svgs/linkedin-icon.svg';

class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        footerText: false,
        footerLine: false,
        footerMail: false,
        footerMedium: false,
        footerLinkedIn: false,
        footerCopyrightText: false,
    };
  }

  addScrollingClasses = () => {
    var browserHeight = window.innerHeight;

    console.log(this.state.projectText)
    var offsets = document.getElementById("footer").getBoundingClientRect();
    if (offsets.top <= browserHeight/2 || offsets.top <= browserHeight - 182.5) {
        this.setState ({
          footerText: true,
        });
        setTimeout(() => {
        this.setState ({
          footerLine: true,
          footerMail: true,
        });
        }, 200);
        setTimeout(() => {
        this.setState ({
          footerMedium: true,
        });
        }, 300);
        setTimeout(() => {
        this.setState ({
          footerLinkedIn: true,
        });
        }, 400);
        setTimeout(() => {
        this.setState ({
          footerCopyrightText: true,
        });
        }, 500);
    } else {
        return
    }
  }

  render() {

    window.addEventListener('scroll', this.addScrollingClasses);

    return (
      <div id="footer">
          <div className="footer-container">
            <a href="mailto:emil@emilottosson.com" className={(this.state.footerText ? "show" : "hide")}>Drop me a line!</a>
            <hr className={(this.state.footerLine ? "show-matrix" : "hide")}/>
            <div className="socials-container">
              <a className={"social " + (this.state.footerMail ? "show-matrix" : "hide")} style={{backgroundImage: `url(${email})`}} href="mailto:emil@emilottosson.com" target="_blank" rel="noopener noreferrer">{null}</a>
              <a className={"social " + (this.state.footerMedium ? "show-matrix" : "hide")} style={{backgroundImage: `url(${medium})`}} href="https://medium.com/@emilottosson" target="_blank" rel="noopener noreferrer">{null}</a>
              <a className={"social " + (this.state.footerLinkedIn ? "show-matrix" : "hide")} style={{backgroundImage: `url(${linkedin})`}} href="https://www.linkedin.com/in/emil-ottosson/" target="_blank" rel="noopener noreferrer">{null}</a>
            </div>
            <p className={(this.state.footerCopyrightText ? "show" : "hide")}><strong>© 2020 Emil Ottosson</strong></p>
          </div>
      </div>
    )
  }
}

export default Footer;