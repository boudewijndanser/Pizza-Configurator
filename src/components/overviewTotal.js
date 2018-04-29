import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
import '../css/pizzaOverview.css'
import CalculatedTotal from './calculatedTotal'

class OverviewTotal extends PureComponent {
 

   
  render() {
    return (
        <div className="pizzaBox">
            <div><h5>{this.props.title}</h5></div>
            <div><CalculatedTotal /></div>
       
    </div>
    )
  }
}

export default OverviewTotal

