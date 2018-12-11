import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Workflow from './components/Workflow/Workflow';
import About1 from './components/About1/About1';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import LoadedSlide from './components/LoadedSlide/LoadedSlide';
import { MemoryRouter } from 'react-router'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reactDomRendered: false,
      loadingTimeout: false,
    };

    setTimeout(() => {
      this.setState({
        loadingTimeout: true,
      });
    }, 1000);
  }

  componentDidMount() {
    this.setState ({
      reactDomRendered: true,
    })
  }

  render() {
    return (
      <MemoryRouter>
        { this.state.reactDomRendered && this.state.loadingTimeout ?
          <div className="App" >
              <LoadedSlide />
              <Navbar />
              <Header />
              <Workflow />
              <About1 />
          </div>
        :
          <LoadingScreen />
        }
      </MemoryRouter>
    );
  }
}

export default App;
