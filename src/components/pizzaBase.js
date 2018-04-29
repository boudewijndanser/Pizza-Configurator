import React from 'react';
import PropTypes from 'prop-types';
import '../css/components.css'

import Radio, { RadioGroup } from 'material-ui-next/Radio';
import { FormControlLabel } from 'material-ui-next/Form';


class PizzaBase extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            base: "20"
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
            // className={classes.group}
            value={this.state.base}
            onChange={this.handleChange} >

            <FormControlLabel value="20cm" control={<Radio />} label="20cm NY style" />
            <FormControlLabel value="25cm" control={<Radio />} label="25cm NY style" />
            <FormControlLabel value="30cm" control={<Radio />} label="30cm NY style" />
            <FormControlLabel value="35cm" control={<Radio />} label="35cm NY style" />
            
          </RadioGroup>
      </div>
    );
  }
}


export default (PizzaBase);