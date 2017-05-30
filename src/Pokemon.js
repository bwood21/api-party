import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PokemonInfo from './PokemonInfo'
import './Pokemon.css'


class Pokemon extends Component {
  state = {
    pokenumber: ''
  }

  handleChange = (ev) => {
    const pokenumber = ev.currentTarget.value
    this.setState({ pokenumber })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokenumber}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img className="pokemon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.pokenumber}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up pokemon</button>
          </div>
        </form>

        <Route exact path='/pokemon' render={() => (
          <h3>Please enter a pokemon to search</h3> 
        )} />
        <Route path='/pokemon/:pokenumber' component={PokemonInfo} />
      </div>
    )
  }
}

export default Pokemon