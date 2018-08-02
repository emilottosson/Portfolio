import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Workflow from './components/Workflow/Workflow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Workflow />
      </div>
    );
  }
}

export default App;
