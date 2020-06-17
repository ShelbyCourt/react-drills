import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Products extends Component {
    constructor() {
      super();
  
      this.state = {
        pokemon: []
      };
    }

    componentDidMount () {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then( response => {
        this.setState ({
        pokemon: ({ pokemon: response.data })
        });
    });
  }

  render() {
    let pokemon = this.state.pokemon.map((pokemon, index) => {
      if (pokemon.name) {
        return (
          <Link key={index} to={`/details/${pokemon.id}`}>
              {pokemon.name}
            {/* <img width="200" src={pokemon.image} /> */}
          </Link>
        );
      }
    });

    return (
        <div>
            <h1>Pokemon</h1>
            {pokemon}
        </div>
    );
  }
}

export default Products;