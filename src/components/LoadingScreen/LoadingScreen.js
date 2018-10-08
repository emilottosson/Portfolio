import React, { Component } from 'react';
import './LoadingScreen.css';
import Lottie from 'react-lottie'
import * as animationData from './loadingSquares.json'

class LoadingScreen extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,

    };

    return (
      // Container for loading screen content
      <div id="loading-screen">
        <div className="loading-animation">
          <Lottie options={defaultOptions}/>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
