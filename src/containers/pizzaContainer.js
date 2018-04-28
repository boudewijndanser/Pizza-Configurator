import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'

import PizzaOverview from '../components/pizzaOverview'
import PizzaBase from '../components/pizzaBase'
import PizzaSauce from '../components/pizzaSauce'
import PizzaTopping from '../components/pizzaTopping'
import DroneDelivery from '../components/droneDelivery'

class PizzaContainer extends PureComponent {
 constructor(props) {
     super(props)
     this.state = {
        base: '',
        sauce: '',
        toppings: '',
        droneDelivery: false,
        readyToOrder: false
     }
     this.handleDelivery = this.handleDelivery.bind(this)
     this.handleBase = this.handleBase.bind(this)
 }

 
 handleDelivery = event => {
    this.setState({
      [event.currentTarget.name]: event.target.checked
    })
    console.log(event.currentTarget.name, 'set to: ', event.target.checked)
  }  

  handleBase = event => {
    this.setState({ base: event });
    console.log('Chosen base: ',event)
  }  
  render() {
    return (
        <div>
      <h1>Let's setup your pizza!</h1>
      <PizzaOverview />
      <PizzaBase 
      name={"base"}
      title={"Start by choosing a base for your pizza"}
      subTitle={'Pick a size'}
      options={this.state.base}
      handleFunction={this.handleBase}
      
      />
      <PizzaSauce />
      <PizzaTopping />
      <DroneDelivery
      name={"droneDelivery"}
      title={'Turbo Drone Delivery'}
      subTitle={'Are you getting hangry?'}
      label={"Send help soon..."}
      handleFunction={this.handleDelivery}
        /> 
      </div>
    )
  }
}

export default PizzaContainer
