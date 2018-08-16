import React, { Component } from 'react';
import './MenuToggleButton.css';

class MenuToggleButton extends Component {
  render() {
    return (
      // Container for hamburger menu
      <button className="toggle-button" onClick={this.props.click}>
        {/* Lines that make the hamburger menu */}
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    );
  }
}

export default MenuToggleButton;
