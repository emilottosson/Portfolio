import React, { Component } from 'react';
import './About.css';

import worldmap from '../../svgs/worldmap.svg';

class About1 extends Component {

  render() {

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
                <h1 className="title-text">Stay you,<br /> then you're strong.</h1>
              </div>
              <div className="subheading-container">
                <h2 className="subheading-text">I’am a <span className="spanmainbackground">designer</span> who create amazing stuff based on <span className="spanmainbackground">user experience</span> and <span className="spanmainbackground">visual design</span>. That pretty much sums it up.
                I enjoy being a part of the <span className="spanmainbackground">entire design process</span>, for <span className="spanmainbackground">making things better</span>. 
                Whether it is solving a complex design problem, or fixing the water machine in the office, 
                I aim for <span className="spanmainbackground">simple solutions</span> that will improve everything around me.</h2>
              </div>
              <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn-green">Let´s get in touch</button></a>
            </div>
          </div>
        </div>
        <div id="about2-container">
          <div className="section-detail-right"/>
          <div className="visual-page-green-container">
            <div className="section-ribbon">
              <h1>About</h1>
            </div>
            <div className="map">
              <div className="title-container">
                <h1 className="title-text">Raised in Sweden, living in Umeå</h1>
              </div>
              <div className="subheading-container">
                <h2 className="subheading-text">I have been born and raised in Umeå, Sweden. Over the years I have had the chance to explore <span className="spanmainbackground">different cultures</span> traveling with friends and family. I got my Master's degree in Engineering, Interaction technology and design from Umeå University in summer 2019.</h2>
              </div>
                <img src={worldmap} height="100%" width="100%" alt='icon' />
                <div className="swe"></div>
                <div className="kor"></div>
              <div className="subheading2-container">
                <h2 className="subheading2-text">I had the opportunity to study <span className="spanmainbackground">psychology</span> and <span className="spanmainbackground">UI/UX design</span> at Sogang University, South Korea, in fall 2017.</h2>
              </div>
              <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn-red">Send me an email</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
