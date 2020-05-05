import React, { Component } from 'react';
import './LoadedSlide.css';

class LoadedSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.startAnimation = this.startAnimation.bind(this);
  }

  startAnimation(callback) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        callback();
      });
    });
  };

  componentDidMount() {
    this.startAnimation(() => {
      this.setState({ animate: true });
    });
  }

  render() {
    return (
      <div
        style={ {
          position: 'absolute',
          zIndex: '5',
          background: '#f4f4f4',
          width: '100%',
          height: this.state.animate ? 0 : '100vh',
          transition: 'height .4s ease-out',
        } }
      >
      </div>
    );
  }
}

export default LoadedSlide;
