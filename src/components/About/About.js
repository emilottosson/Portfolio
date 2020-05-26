import React, { Component } from 'react';
import './About.css';
import worldmap from '../../svgs/worldmap.svg';
import Button from '../Button/Button';

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
        about1Title: false,
        about1Text: false,
        about1Button: false,
        about2Title: false,
        about2Text: false,
        about2Worldmap: false,
        about2SecondText: false,
        about2Button: false,
    };
  }

  addScrollingClasses = () => {
    var browserHeight = window.innerHeight;
    var offsets = document.getElementById("about1-container").getBoundingClientRect();
    var offsetsSecond = document.getElementById("about2-container").getBoundingClientRect();
    if (offsets.top <= browserHeight/2) {
        this.setState ({
          about1Title: true,
        });
        setTimeout(() => {
        this.setState ({
          about1Text: true,
        });
        }, 200);
        setTimeout(() => {
        this.setState ({
          about1Button: true,
        });
        }, 400);
    } else {
        return
    }

    if (offsetsSecond.top <= browserHeight/2) {
      this.setState ({
        about2Title: true,
      });
      setTimeout(() => {
      this.setState ({
        about2Text: true,
      });
      }, 200);
      setTimeout(() => {
      this.setState ({
        about2Worldmap: true,
      });
      }, 400);
      setTimeout(() => {
      this.setState ({
        about2SecondText: true,
      });
      }, 600);
      setTimeout(() => {
      this.setState ({
        about2Button: true,
      });
      }, 800);
  } else {
      return
  }
  }

  render() {

    window.addEventListener('scroll', this.addScrollingClasses);

    return (
      <div id="about-container">
        <div id="about1-container">
          <div className="section-detail-left"/>
          <div className="visual-page-purple-container">
            <div className="section-ribbon">
              <h1>About</h1>
            </div>
            <div className="about1-content">
              <div className="title-container">
                <h1 className={"title-text " + (this.state.about1Title ? "show" : "hide")}>Stay you,<br /> then you're strong.</h1>
              </div>
              <div className="subheading-container">
                <h2 className={"subheading-text " + (this.state.about1Text ? "show" : "hide")}>I’m a <span className="spanmainbackground">designer</span> who create amazing stuff based on <span className="spanmainbackground">user experience</span> and <span className="spanmainbackground">visual design</span>. That pretty much sums it up.
                I enjoy being a part of the <span className="spanmainbackground">entire design process</span>, for <span className="spanmainbackground">making things better</span>. 
                Whether it is solving a complex design problem, or fixing the water machine in the office, 
                I aim for <span className="spanmainbackground">simple solutions</span> that will improve everything around me.</h2>
              </div>
              <div className={(this.state.about1Button ? "show" : "hide")}>
                <Button 
                  color="green"
                  buttonText="Let´s get in touch"
                  buttonHref="mailto:emil@emilottosson.com"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about2-container">
          <div className="visual-page-green-container">
            <div className="section-ribbon">
              <h1>About</h1>
            </div>
            <div className="map">
              <div className="title-container">
                <h1 className={"title-text " + (this.state.about2Title ? "show" : "hide")}>Raised in Sweden, living in Umeå</h1>
              </div>
              <div className="subheading-container">
                <h2 className={"subheading-text " + (this.state.about2Text ? "show" : "hide")}>I have been born and raised in Umeå, Sweden. Over the years I have had the chance to explore <span className="spanmainbackground">different cultures</span> traveling with friends and family. I got my Master's degree in Engineering, Interaction technology and design from Umeå University in summer 2019.</h2>
              </div>
              <img className={(this.state.about2Worldmap ? "show" : "hide")} src={worldmap} height="100%" width="100%" alt='icon' />
              <div className="subheading2-container">
                <h2 className={"subheading2-text " + (this.state.about2SecondText ? "show" : "hide")}>I had the opportunity to study <span className="spanmainbackground">psychology</span>, <span className="spanmainbackground">digital media</span> and <span className="spanmainbackground">UI/UX design</span> at Sogang University, South Korea, in fall 2017.</h2>
              </div>
              <div className={(this.state.about2Button ? "show" : "hide")}>
                <Button 
                  color="red"
                  buttonText="Send me an email"
                  buttonHref="mailto:emil@emilottosson.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
