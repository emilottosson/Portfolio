import React, { Component } from 'react';
import './About1.css';

class About1 extends Component {

  render() {

    return (
      // Container for first about section content
      <div id="about1-container">
        <div className="about1-content">
          <div className="title-container">
            <h1 className="title-text">Surround yourself with people that make you look smarter.</h1>
          </div>
          <div className="subheading-container">
            <h2 className="subheading-text">I’am a <span className="spanwhite">designer</span> who’s focused on <span className="spanwhite">user experience</span> and <span className="spanwhite">visual design</span>. I like to surround myself with people that is smarter than me and can give me a <span className="spanwhite">good laugh</span>. They’ll offer, what they have got to offer. If those people can make me happy while doing that, <span className="spanwhite">success</span> will be easier to achieve.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About1;
