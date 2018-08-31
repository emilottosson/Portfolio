import React, { Component } from 'react';
import './MenuToggleButton.css';

class MenuToggleButton extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Container for hamburger menu*/}
        {!this.props.shown ? <button className="toggle-button" onClick={this.props.click}>

          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
          <div className="toggle-button-line" />
        </button> :
        <button className="toggle-button-cross" onClick={this.props.click}>

        <div className="toggle-cross-line neg-rotation" />
        <div className="toggle-cross-line pos-rotation" />
        </button>}
      </React.Fragment>
    );
  }
}

export default MenuToggleButton;
