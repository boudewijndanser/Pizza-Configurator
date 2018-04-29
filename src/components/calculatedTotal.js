import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { bases, sauces, externalDelivery } from '../externalPizza'
import '../css/pizzaOverview.css'

class CalculatedTotal extends PureComponent {
        
   

    render() {

            const basePrice = 0
            const saucePrice = 0
            const toppingsPrice = 0
            const deliveryPrice = 0

        if(this.props.base){
            this.basePrice = bases[this.props.base].price
            console.log('bases', bases[this.props.base].price)
            }
        if(this.props.sauce){
            this.saucePrice = sauces[this.props.sauce].price
            console.log('sauces', sauces[this.props.sauce].price)
            }

        if(this.props.toppings){
            this.toppingsPrice = (this.props.toppings.length)*0.5
            console.log('toppings.length: ', this.props.toppings.length)
        }

        if(this.props.delivery){
            this.toppingsPrice = (this.props.toppings.length)*0.5
            console.log('toppings.length: ', this.props.toppings.length)
        }


        return (
          <div className="yourTotal">
          <h1>{this.basePrice+this.saucePrice+this.toppingsPrice}</h1>
          </div>
        )
      }
    



}



  function mapStateToProps(state){
    return {
      base: state.base,
      sauce: state.sauce,
      toppings: state.toppings,
      delivery: state.delivery
    }
  }
  
  export default connect(mapStateToProps)(CalculatedTotal)

  