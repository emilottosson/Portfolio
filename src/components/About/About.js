import React, { Component } from 'react';
import './About.css';

import worldmap from '../../svgs/worldmap.svg';

class About1 extends Component {

  render() {

    return (
      <div id="about-container">
        <div id="about1-container">
          <div className="about1-content">
            <div className="title-container">
              <h1 className="title-text">Stay you,<br /> then you're strong.</h1>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">I’am a <span className="spanwhite">designer</span> who create amazing stuff based on <span className="spanwhite">user experience</span> and <span className="spanwhite">visual design</span>. That pretty much sums it up.
              I enjoy being a part of the <span className="spanwhite">entire design process</span>, for <span className="spanwhite">making things better</span>. 
              Whether it is solving a complex design problem, or fixing the water machine in the office, 
              I aim for <span className="spanwhite">simple solutions</span> that will improve everything around me.</h2>
            </div>
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-about">Let´s get in touch</button></a>
          </div>
        </div>
        <div id="about2-container">
          <div className="map">
            <div className="title-container">
              <h1 className="title-text">Raised in Sweden, living in Umeå</h1>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">I have been born and raised in Umeå, Sweden. Over the years I have had the chance to explore <span className="spandarkgrey">different cultures</span> traveling with friends and family. I got my Master's degree in Engineering, Interaction technology and design from Umeå University in summer 2019.</h2>
            </div>
              <img src={worldmap} height="100%" width="100%" alt='icon' />
              <div className="swe"></div>
              <div className="kor"></div>
            <div className="subheading2-container">
              <h2 className="subheading2-text">I had the opportunity to study <span className="spandarkgrey">psychology</span> and <span className="spandarkgrey">UI/UX design</span> at Sogang University, South Korea, in fall 2017.</h2>
            </div>
            <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-about2">Send me an email</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
