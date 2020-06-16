import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import router from './router';



class App extends Component {
  render () { 
    return (
      <div className="App">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/signup">Signup</Link>
        </nav>
        {router}
      </div>
    );
  }
}

export default App;
