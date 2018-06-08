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

import '../css/pizzaOverview.css'
import '../css/typography.css'

class PizzaContainer extends PureComponent {
 constructor(props) {
     super(props)
     this.state = {
        base: '',
        sauce: '',
        toppings: [],
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
            store.dispatch(droneDelivery("0"))
            } else {
                store.dispatch(droneDelivery("1"))
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

  render() {
    return (
      <div className="pizzaWrapper">
        <div className="header"><h1>Pizza Configurator</h1></div>
        <main className="options"><PizzaBase 
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
          subTitle={'Make it colorful!'} />
        <DroneDelivery
          name={"droneDelivery"}
          title={'Turbo Drone Delivery'}
          subTitle={'Are you getting hangry?'}
          label={"Send help soon..."}
          handleFunction={this.handleDelivery} />
        </main>
        <aside className="order"><PizzaOverview /></aside>
        <footer className="footer"><p>Pizza & code by: <a href="https://github.com/boudewijndanser">Boudewijn Danser</a></p></footer>
      </div>
    )
  }
}

export default connect (null, { droneDelivery, selectBase, selectSauce })(PizzaContainer)
