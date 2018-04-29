import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'

import { droneDelivery, selectBase, selectSauce } from '../actions/index'
import { connect } from 'react-redux'
import store from '../store'


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
        toppings: {},
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
        if (this.state.droneDelivery === true){
            store.dispatch(droneDelivery("Normal"))
            } else {
                store.dispatch(droneDelivery("Drone"))
            }
    
  }  

  handleBase = event => {
    this.setState({ base: event });
    const chosenBase = event
    store.dispatch(selectBase(chosenBase))
  }

  handleSauce = event => {
    this.setState({ sauce: event });
    const chosenSauce = event
    store.dispatch(selectSauce(chosenSauce))
  }
  
  handleTopping = name => event => {
    this.setState({toppings:{ [name]: event.target.checked }});
    console.log('-> name: ', name)
  }

  render() {
    return (
        <div>
      <PizzaOverview />
      <PizzaBase 
      name={"base"}
      title={"Start by choosing a base for your pizza"}
      subTitle={'Pick a size'}
      handleFunction={this.handleBase} />
      <PizzaSauce 
      name={"sauce"}
      title={"Select a sauce of your liking"}
      subTitle={'Red is the new black!'}
      handleFunction={this.handleSauce} />
      <PizzaTopping
      name={"topping"}
      title={"Get some vegetables on there"}
      subTitle={'Make it colorful!'}
      handleFunction={this.handleTopping} />
      <DroneDelivery
      name={"droneDelivery"}
      title={'Turbo Drone Delivery'}
      subTitle={'Are you getting hangry?'}
      label={"Send help soon..."}
      handleFunction={this.handleDelivery} /> 
      </div>
    )
  }
}

export default connect (null, { droneDelivery, selectBase, selectSauce })(PizzaContainer)
