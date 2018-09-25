import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Workflow from './components/Workflow/Workflow';
import { MemoryRouter } from 'react-router'

class App extends Component {

  render() {

    return (
      <MemoryRouter>
        <div className="App" >
            <Navbar />
            <Header />
            <Workflow />
        </div>
      </MemoryRouter>
    );
  }
}

export default App;
