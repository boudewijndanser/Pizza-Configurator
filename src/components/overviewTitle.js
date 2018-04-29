import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
import '../css/pizzaOverview.css'


class OverviewTitle extends PureComponent {
 

   
  render() {
    return (
        <div className="pizzaBox">
            <div><h6>{this.props.title}</h6></div>
            <div><h5>{this.props.product}</h5></div>
            <div><h4>{this.props.price}</h4></div>
       
    </div>
    )
  }
}

export default OverviewTitle

