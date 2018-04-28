import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'

import PizzaOverview from '../components/pizzaOverview'
import PizzaBase from '../components/pizzaBase'
import PizzaSauce from '../components/pizzaSauce'
import PizzaTopping from '../components/pizzaTopping'
import DroneDelivery from '../components/droneDelivery'

class PizzaContainer extends PureComponent {
  static propTypes = {
    // ...
  }

  render() {
    return (
        <div>
      <h1>Let's setup your pizza!</h1>
      <PizzaOverview />
      <PizzaBase />
      <PizzaSauce />
      <PizzaTopping />
      <DroneDelivery />
      </div>
    )
  }
}

export default PizzaContainer
