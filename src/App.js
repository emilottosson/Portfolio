import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Workflow from './components/Workflow/Workflow';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hamburgerMenuOpen: false
    };
    this.menuToggleClickHandler = this.menuToggleClickHandler.bind(this);
  }

  menuToggleClickHandler() {
    this.setState((prevState) => {
      return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen};
    });
  };

  render() {
    let hamburgerMenu;

    if(this.state.hamburgerMenuOpen) {
      hamburgerMenu = <HamburgerMenu />;
    }

    return (
      <div className="App">
        <Navbar hamburgerClickHandler={this.menuToggleClickHandler}/>
        {hamburgerMenu}
        <Header />
        <Workflow />
      </div>
    );
  }
}

export default App;
