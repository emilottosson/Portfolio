import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Ingrids from './components/Projects/Ingrids/Ingrids';
import Eaty from './components/Projects/Eaty/Eaty';
import BrawlGaming from './components/Projects/BrawlGaming/BrawlGaming';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ingrids" component={Ingrids} />
              <Route path="/eaty" component={Eaty} />
              <Route path="/brawlgaming" component={BrawlGaming} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
