import React from 'react';
import PropTypes from 'prop-types';
import '../css/components.css'
import { bases } from '../externalPizza'

import Radio, { RadioGroup } from 'material-ui-next/Radio';
import { FormControlLabel } from 'material-ui-next/Form';


class PizzaBase extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            base: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        handleFunction: PropTypes.func.isRequired
      }
      handleChange = event => {
        this.setState({ base: event.target.value });
        this.props.handleFunction(event.target.value)
        // Using the function passed through the props broke the radiobox selecting
        // So I'm calling the props function from here, that worked...
      }

  render() {

    return (
        <div className="questionAndOptions">
        <h3>{this.props.title}</h3>
        <h4>{this.props.subTitle}</h4>
        <RadioGroup
            name={this.props.name}
            value={this.state.base}
            onChange={this.handleChange} >

            <FormControlLabel value={bases[0].id} control={<Radio />} label={bases[0].name +" €"+ bases[0].price} />
            <FormControlLabel value={bases[1].id} control={<Radio />} label={bases[1].name +" €"+ bases[1].price} />
            <FormControlLabel value={bases[2].id} control={<Radio />} label={bases[2].name +" €"+ bases[2].price} />
            <FormControlLabel value={bases[3].id} control={<Radio />} label={bases[3].name +" €"+ bases[3].price} />
            
          </RadioGroup>
      </div>
    )
  }
}


export default (PizzaBase);