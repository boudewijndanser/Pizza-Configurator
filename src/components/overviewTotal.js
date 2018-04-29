import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
import '../css/pizzaOverview.css'


class OverviewTotal extends PureComponent {
 

   
  render() {
    return (
        <div className="pizzaBox">
            <div><h5>{this.props.titel}</h5></div>
            <div><h4>{this.props.totalPrice}</h4></div>
       
    </div>
    )
  }
}

export default OverviewTotal

