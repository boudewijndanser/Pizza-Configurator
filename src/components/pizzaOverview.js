import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'material-ui-next/Button'

import OverviewTitle from './overviewTitle'
import OverviewTotal from './overviewTotal'

import { bases, sauces, externalToppings, externalDelivery } from '../externalPizza'

import '../css/pizzaOverview.css'

class PizzaOverview extends PureComponent {
  constructor(props) {
    super(props)
        this.state = {
        delivery: "1",
        subTotalPrice: "0",
        deliveryCost: "0",
        totalPrice: ""

    }
    
}
static propTypes = {
  delivery: PropTypes.string.isRequired
}
    calculatedTotal= () => {
      const basePrice =  bases[this.props.base].price
      const saucePrice = sauces[this.props.sauce].price
      const toppingsPrice = (this.props.toppings.length+1)*0.5
    //  const toppingsPrice = (this.props.toppings ? pizzaToppings[this.props.toppings] : 0)
      
      return basePrice + saucePrice + toppingsPrice
      
    }
  render() {
    return (
      <div className="yourPizza">
      <h2>Your Pizza</h2>
     {
       this.props.base &&  <OverviewTitle 
       title={"Base:"}
       product={bases[this.props.base].name} 
       price={"€"+ bases[this.props.base].price}/>
     }
     {
       this.props.sauce && <OverviewTitle 
       title={"Sauce:"}
       product={sauces[this.props.sauce].name}  
       price={"€"+ sauces[this.props.sauce].price}/>
     }
     {
       this.props.toppings[0] &&  <OverviewTitle 
       title={"Topping:"}
       product={externalToppings[0].name}
       price={"€"+ externalToppings[0].price}/>
     }
     {
       this.props.toppings[1] &&  <OverviewTitle 
       title={"Topping:"}
       product={externalToppings[1].name}
       price={"€"+ externalToppings[1].price}/>
     }
     {
       this.props.toppings[2] &&  <OverviewTitle 
       title={"Topping:"}
       product={externalToppings[2].name}
       price={"€"+ externalToppings[2].price}/>
     }
     {
      this.props.delivery && <OverviewTitle title={"Delivery:"}
      product={externalDelivery[this.props.delivery].name} 
      price={"€"+this.state.deliveryCost}/>
     }
     <br />
      <br />
      {
        this.props.base && this.props.sauce && <OverviewTotal
        title="Total"/>
      }
       
      <br />
      <br />
      {
        !this.props.base && 
        <Button disabled size="large" color="secondary" variant="raised">Order!</Button>
      }
      {
        this.props.base && 
        <Button size="large" color="secondary" variant="raised">Order!</Button>
      }
      </div>
    )
  }
}

function mapStateToProps(state){
  //console.log('mapStateToProps?')
  return {
    delivery: state.delivery,
    base: state.base,
    sauce: state.sauce,
    toppings: state.toppings
  }
}

export default connect(mapStateToProps)(PizzaOverview)
