import React from 'react';
import PropTypes from 'prop-types'
import '../css/components.css'

import { externalToppings } from '../externalPizza'

import {selectToppings } from '../actions/index'
import { connect } from 'react-redux'
import store from '../store'

import { FormControl, FormGroup, FormControlLabel, FormHelperText} from 'material-ui-next/Form';
import Checkbox from 'material-ui-next/Checkbox';

class PizzaTopping extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)

      
      this.state = {
        toppings:[],
        disabled1: false,
        disabled2: false,
        disabled3: false,
        disabled4: false,
        disabled5: false,
        disabled6: false,
        disabled7: false
      }
      console.log(this.state)
      console.log(this.props.toppings)
      
  }

  
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
  }
  
  handleChange(checkerBox) {
		const newSelection = checkerBox;
		let newSelectionArray;
		if(this.state.toppings.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.toppings.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.toppings, newSelection];
		}
    this.setState({ toppings: newSelectionArray }, () => console.log('chosen toppings', this.state.toppings));
    store.dispatch(selectToppings(newSelectionArray))
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
                checked={this.state.pineapple}
                disabled={this.state.disabled1}
                onChange={_ => this.handleChange('1')}
                value={externalToppings[0].id}
              />
            }
            label={externalToppings[0].name}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.corn}
                disabled={this.state.disabled2}
                onChange={_ => this.handleChange('2')}
                value={externalToppings[1].id}
              />
            }
            label={externalToppings[1].name}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.olives}
                disabled={this.state.disabled3}
                onChange={_ => this.handleChange('3')}
                value={externalToppings[2].id}
              />
            }
            label={externalToppings[2].name}
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={this.state.onion}
                disabled={this.state.disabled4}
                onChange={_ => this.handleChange('4')}
                value={externalToppings[3].id}
              />
            }
            label={externalToppings[3].name}
          /></div>
          <div className="vegetable2">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.spinach}
                disabled={this.state.disabled5}
                onChange={_ => this.handleChange('5')}
                value={externalToppings[4].id}
              />
            }
            label={externalToppings[4].name}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.cherrytom}
                disabled={this.state.disabled6}
                onChange={_ => this.handleChange('6')}
                value={externalToppings[5].id}
              />
            }
            label={externalToppings[5].name}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.rocket}
                disabled={this.state.disabled7}
                onChange={_ => this.handleChange('7')}
                value={externalToppings[6].id}
              />
            }
            label={externalToppings[6].name}
          />
          </div>
        </FormGroup>
        <FormHelperText>Select up to 3</FormHelperText>
      </FormControl>
      </div>
    );
  }
}

const mapStateToProps = function (state, props) {
  return {
      toppings: state.toppings
  }
}

export default connect(mapStateToProps, { selectToppings })(PizzaTopping)

