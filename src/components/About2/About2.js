import React, { Component } from 'react';
import './About2.css';

import worldmap from '../../svgs/worldmap.svg';

class About2 extends Component {

  render() {

    return (
      // Container for second about section content
      <div id="about2-container">
        <div className="map">
          <div className="title-container">
            <h1 className="title-text">Raised in Sweden, living in Umeå</h1>
          </div>
          <div className="subheading-container">
            <h2 className="subheading-text">I have been born and raised in Umeå, Sweden. Over the years i have had the chance to explore <span className="spandarkgrey">different cultures</span>, traveling with friends and family. I will have a master of science degree in interaction technology and design from Umeå University in spring 2019.</h2>
          </div>
          <img src={worldmap} height="100%" width="100%" alt='icon' />
          <div className="subheading2-container">
            <h2 className="subheading2-text">I had the opportunity to study <span className="spandarkgrey">psychology</span> and <span className="spandarkgrey">UI/UX design</span> at Sogang University, South Korea, in fall 2017.</h2>
          </div>
          <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-about2">Send me an email</button></a>
        </div>
      </div>
    );
  }
}

export default About2;