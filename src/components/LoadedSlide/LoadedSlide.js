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

  // Start animation helper using nested requestAnimationFrames
  startAnimation(callback) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        callback();
      });
    });
  };

  componentDidMount() {
    // You'll need to import startAnimation at the top of the file
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
          width: '100vw',
          height: this.state.animate ? 0 : '100vh',
          transition: 'height .4s ease-out',
        } }
      >
      </div>
    );
  }
}

export default LoadedSlide;
