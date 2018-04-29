import React, { Component } from 'react';
import './css/App.css';

import PizzaContainer from './containers/pizzaContainer'
import TopBar from './components/topBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopBar title="Pizza Configurator!"/>
      <br />
      <PizzaContainer />
      </div>
    );
  }
}

export default App;
