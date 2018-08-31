import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Workflow from './components/Workflow/Workflow';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <BrowserRouter>
        <div className="App" >
            <Navbar />
            <Header />
            <Workflow />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
