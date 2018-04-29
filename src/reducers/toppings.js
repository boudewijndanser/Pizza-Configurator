
import { SELECT_TOPPINGS } from '../actions/index'

const initialState = []

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case SELECT_TOPPINGS :
      return action.payload
    default :
      return state
  }
}