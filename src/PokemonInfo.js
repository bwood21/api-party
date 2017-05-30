import React, { Component } from 'react'

class PokemonInfo extends Component {
  state = {
    pokemon: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: ''
    }
  }
  
  constructor(props) {
    super(props)
    this.fetchpokeData(props)
  }

  fetchpokerData(props) {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
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
      <div className="github-user">
        <img src={pokemon.avatar_url} alt="user"/>
        <h2>{pokemon.login}</h2>
        <h3>followers: {pokemon.followers}</h3>
        <h3>following: {pokemon.following}</h3>
        <h3>location: {pokemon.location}</h3>
      </div>
    )
  }
}

export default PokemonInfo