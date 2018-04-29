import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../css/components.css'

import Switch from 'material-ui-next/Switch'
import { FormControlLabel } from "material-ui-next/Form";


class DroneDelivery extends PureComponent {
    constructor(props) {
        super(props)
            this.state = {
            droneDelivery: "Normal"
        }
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        handleFunction: PropTypes.func.isRequired
      }

   
  render() {
    return (
        <div className="questionAndOptions">
        <h3>{this.props.title}</h3>
        <h4>{this.props.subTitle}</h4>
        <FormControlLabel
          label={this.props.label}
          control={<Switch name={this.props.name}
          onChange={this.props.handleFunction} />}
        />
       
    </div>
    )
  }
}

export default DroneDelivery
