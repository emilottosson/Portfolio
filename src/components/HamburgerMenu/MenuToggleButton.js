import React, { Component } from 'react';
import './MenuToggleButton.css';

class MenuToggleButton extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Container for hamburger menu*/}
        <div className="toggle-button-container">
        {!this.props.shown ? <button className="toggle-button" onClick={this.props.click}>

          {/* To make a 3 line hamburger menu, switch to three "toggle-button-line" 
            and add justify-content: space-between to "toggle-button"*/}
          <div className="toggle-button-line-first" />
          <div className="toggle-button-line" />
          {/*<div className="toggle-button-line" />*/}
        </button> :
        <button className="toggle-button-cross" onClick={this.props.click}>

        <div className="toggle-cross-line neg-rotation" />
        <div className="toggle-cross-line pos-rotation" />
        </button>}
        </div>
      </React.Fragment>
    );
  }
}

export default MenuToggleButton;
