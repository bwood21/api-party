import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Appheadings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
        </div>
        <Switch>
          <Route render={()=><p>To get started, click one of the links</p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
