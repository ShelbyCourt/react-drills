import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Products extends Component {
    constructor () {
        super ()
        this.state = {
            pokemons: []
        };
    }

    componentDidMount () {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then( response => {
        this.setState ({
        pokemons: response.data
        });
    });
  }

  render () {
    let pokemons = this.state.pokemons.map((pokemon, index) => {
        if (pokemon.name) { 
            return (
                <Link key={index} to={`/details/${pokemon.name}`}>
                    </Link>
            );
        }
    });
    return (
        <div>
            <h1>Pokemon</h1>
            {pokemons}
        </div>
    );
  }
}

export default Products;