import React from 'react';
import PropTypes from 'prop-types'
import '../css/components.css'

import { FormControl, FormGroup, FormControlLabel, FormHelperText} from 'material-ui-next/Form';
import Checkbox from 'material-ui-next/Checkbox';

class PizzaTopping extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)

      this.state = {toppings:{
        total: 3,
        pineapple: false,
        corn: false,
        olives: false,
        onion: false,
        spinach: false,
        cherrytom: false,
        rocket: false
        }
      }
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    handleFunction: PropTypes.func.isRequired
  }

  componentWillMount(){
    console.log('this.state: ',this.state)
  }
  
  handleChange = name => event => {
    console.log('this.state: ',this.state[name])
    this.setState({toppings: {[name]: event.target.checked }});
    console.log('this.state: ',this.state)
    console.log('-> name: ', name, event.target.checked)
  }
  
  render() {
    return (
        
      <div className="questionAndOptions">
        <h3>{this.props.title}</h3>
        <h4>{this.props.subTitle}</h4>
        <FormControl>
        <FormGroup>
          <div className="vegetable1"><FormControlLabel
            control={
              <Checkbox
                //checked={this.state.pineapple}
                onChange={this.handleChange('pineapple')}
                value="pineapple"
              />
            }
            label="Pineapple"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.corn}
                onChange={this.handleChange('corn')}
                value="corn"
              />
            }
            label="Corn"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.olives}
                onChange={this.handleChange('olives')}
                value="olives"
              />
            }
            label="Olives"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={this.state.onion}
                onChange={this.handleChange('onion')}
                value="onion"
              />
            }
            label="Red onion"
          /></div>
          <div className="vegetable2">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.spinach}
                onChange={this.handleChange('spinach')}
                value="spinach"
              />
            }
            label="Spinach"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.cherrytom}
                onChange={this.handleChange('cherrytom')}
                value="cherrytom"
              />
            }
            label="Cherry tomatoes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.rocket}
                onChange={this.handleChange('rocket')}
                value="rocket"
              />
            }
            label="Rocket"
          />
          </div>
        </FormGroup>
        <FormHelperText>Select up to 3</FormHelperText>
      </FormControl>
      </div>
    );
  }
}

export default PizzaTopping;
