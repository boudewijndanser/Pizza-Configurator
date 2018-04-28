import React, { Component } from 'react';
import './css/App.css';

import PizzaContainer from './containers/pizzaContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <PizzaContainer />
      </div>
    );
  }
}

export default App;
