import React, { Component } from 'react';
import './About1.css';

class About1 extends Component {

  render() {

    return (
      // Container for first about section content
      <div id="about1-container">
        <div className="about1-content">
          <div className="title-container">
            <h1 className="title-text">Stay you,<br /> then you're strong.</h1>
          </div>
          <div className="subheading-container">
            <h2 className="subheading-text">I’am a <span className="spanwhite">designer</span>  who’s focused on <span className="spanwhite">user experience</span> and <span className="spanwhite">visual design</span> that will help me create amazing stuff. That pretty much sums it up.
            I enjoy being a part of the <span className="spanwhite">entire design process</span>, for <span className="spanwhite">making things better</span>. 
            Whether it is solving a complex design problem, or fixing the water machine in the office, 
            I aim for <span className="spanwhite">simple solutions</span> that will improve everything around me.</h2>
          </div>
          <a href="mailto:emil_ottosson@hotmail.com"><button type="button" className="btn btn-about">Let´s get in touch</button></a>
        </div>
      </div>
    );
  }
}

export default About1;
