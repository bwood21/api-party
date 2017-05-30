import React, { Component } from 'react'

class PokemonInfo extends Component {
  state = {
    pokemon: {
      id:'',
      name:'',
      

    }
  }
  
  constructor(props) {
    super(props)
    this.fetchpokeData(props)
  }

  fetchpokeData(props) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokenumber}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchpokeData(nextProps)
    }
  }

  render() {
    const { pokemon } = this.state
    return (
      <div className="pokemon-pokemon">
        {/*<img src={pokemon.avatar_url} alt="pokemon"/>*/}
        
        <h3>ID: {pokemon.followers}</h3>
        <h3>Name: {pokemon.following}</h3>
        {/*<h3>location: {pokemon.location}</h3>*/}
      </div>
    )
  }
}

export default PokemonInfo