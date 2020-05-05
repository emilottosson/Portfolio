import React, { Component } from 'react';
import './Header.css';
import ButtonLinkTo from '../ButtonLinkTo/ButtonLinkTo';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mountedHeaderOverlay: false,
      mountedHeaderTitle: false,
      mountedHeaderText: false,
      mountedHeaderButtons: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState ({
        mountedHeaderOverlay: true,
      });
    }, 600);
    setTimeout(() => {
      this.setState ({
        mountedHeaderTitle: true,
      });
    }, 1400);
    setTimeout(() => {
      this.setState ({
        mountedHeaderText: true,
      });
    }, 1600);
    setTimeout(() => {
      this.setState ({
        mountedHeaderButtons: true,
      });
    }, 1800);
  }

  render() {

    var style1 = { 
      opacity: '1', 
      transition: 'opacity .5s ease-in-out, transform .5s ease-in-out', 
      transform: 'translateY(5px)' 
    }
    var style2 = { 
      opacity: '0' ,
      transition: 'opacity .7s ease-in-out'
    }
    var style3 = { 
      opacity: '1', 
    }

    return (
      <div id="header">
        <div className="header-background"></div>
        <div className="header-gradient"></div>
        <div className="header-overlay" style={ this.state.mountedHeaderOverlay ? style2 : style3 }></div>
          <div className="header-content">
            <div className="header-content-container">
              <div className="title-container" style={ this.state.mountedHeaderTitle ? style1 : style2 }>
                <h1 className="title-text">I´m Emil Ottosson, an Swedish <span className="no-break">front-end</span> developer currently based in Umeå, Sweden</h1>
              </div>
              <div className="text-container" style={ this.state.mountedHeaderText ? style1 : style2 }>
                <h2 className="sub-heading-text">I focus on <span className="spanred">creating</span> awesome stuff.<br />
                Define, build, launch, analyze. <span className="spanred">Repeat.</span></h2>
              </div>
              <div className="buttons-container" style={ this.state.mountedHeaderButtons ? style1 : style2 }>
                  <ButtonLinkTo 
                    color="green"
                    buttonText="See selected projects"
                    linkTo="portfolio"
                    buttonStyle={{marginRight: '8px'}}
                  />
                  <ButtonLinkTo 
                    color="red"
                    buttonText="More about my workflow"
                    linkTo="workflow-anchor"
                  />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
