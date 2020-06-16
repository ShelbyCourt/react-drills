import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super ()

    this.state = {
      Pidgey: ''
    };
  }
  
componentDidMount () {
  axios.get('https://pokeapi.co/api/v2/pokemon/16')
  .then( response => {
    this.setState ({
      Pidgey: response.data
    });
  });
}

render () {
  return (
    <div className="App">
      <h1>Name: {this.state.Pidgey.name}</h1>
      <h1>Height: {this.state.Pidgey.height}</h1>
      <h1>Weight: {this.state.Pidgey.weight}</h1>
      <h1>Locations: {this.state.Pidgey.location_area_encounters}</h1>
    </div>
    );
  }
}
export default App;
