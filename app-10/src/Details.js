import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    constructor () {
        super ();
        this.state = {
            pokemon: {}
        };
    }

    componentDidMount () {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
        .then(response => {
            this.setState({ pokemon: response.data });
        });
    }

    render () {
        return (
            <div>
                <h2>{this.state.pokemon.name}</h2>
                <h3>{`Weight: ${this.state.pokemon.height}`}</h3>
            </div>
        );
    }
}

export default Details;