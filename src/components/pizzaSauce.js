import React from 'react';
import PropTypes from 'prop-types';
import '../css/components.css'

import Radio, { RadioGroup } from 'material-ui-next/Radio';
import { FormControlLabel } from 'material-ui-next/Form';


class PizzaSauce extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            sauce: ""
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

            <FormControlLabel value="white" control={<Radio />} label="White sauce" />
            <FormControlLabel value="red" control={<Radio />} label="Red sauce" />
            <FormControlLabel value="double" control={<Radio />} label="Double red sauce" />
            <FormControlLabel value="mix" control={<Radio />} label="Mix it up!" />
            
          </RadioGroup>
      </div>
    );
  }
}


export default (PizzaSauce);