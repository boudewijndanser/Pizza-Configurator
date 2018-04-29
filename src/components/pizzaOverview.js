import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'material-ui-next/Button'

import OverviewTitle from './overviewTitle'

import '../css/pizzaOverview.css'

class PizzaOverview extends PureComponent {
  constructor(props) {
    super(props)
        this.state = {
        delivery: "Normal",
    }
}
static propTypes = {
  delivery: PropTypes.string.isRequired
}

  render() {
    return (
      <div className="yourPizza">
      <h2>Your Pizza</h2>
     {
       this.props.base &&  <OverviewTitle 
       title={"Base:"}
       product={this.props.base} 
       price={"11"}/>
     }
     {
       this.props.sauce && <OverviewTitle 
       title={"Sauce:"}
       product={this.props.sauce} 
       price={"2"}/>
     }

      <OverviewTitle title={"Delivery:"}
      product={this.props.delivery} 
      price={"10%"}/>
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
    sauce: state.sauce
  }
}

export default connect(mapStateToProps)(PizzaOverview)
