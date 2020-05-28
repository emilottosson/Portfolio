import React, { Component } from 'react';
import './ProjectsMenuToggleButton.css';

class ProjectsMenuToggleButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarScroll: false,
    };
  }

    toggleScrollingClasses = () => {
      var scroll = window.scrollY;
      if(scroll !== 0) {
        this.setState( {
          navbarScroll: true,
        });
      } else {
        this.setState( {
          navbarScroll: false,
        });
      }
    }

  render() {

    window.addEventListener('scroll', this.toggleScrollingClasses);

    return (
      <React.Fragment>
        <div className="projects-toggle-button-container">
        {!this.props.shown ? <button className="projects-toggle-button" onClick={this.props.click}>

          {/* To make a 3 line hamburger menu, switch to three "toggle-button-line" 
            and add justify-content: space-around to "toggle-button"*/}
          <div className={"projects-toggle-button-line-first " + (this.state.navbarScroll ? "scrolled" : "")} />
          <div className={"projects-toggle-button-line " + (this.state.navbarScroll ? "scrolled" : "")} />
        </button> :
        <button className="projects-toggle-button-cross" onClick={this.props.click}>

        <div className={"projects-toggle-cross-line neg-rotation " + (this.state.navbarScroll ? "scrolled" : "")} />
        <div className={"projects-toggle-cross-line pos-rotation " + (this.state.navbarScroll ? "scrolled" : "")} />
        </button>}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsMenuToggleButton;
