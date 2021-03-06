import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import AvengersList from './Components/AvengersList';
import AvengerPage from './Components/AvengerPage';

import avengers from './data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/avengers">Avengers</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/avengers" component={AvengersList}/>
        <Route path="/avengers/:id" component={AvengerPage}/>
        
      </div>
    );
  }
}

export default App;
