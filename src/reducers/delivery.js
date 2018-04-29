
import { DRONE_DELIVERY } from '../actions/index'

const initialState = "Normal"

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case DRONE_DELIVERY :
      return action.payload
    default :
      return state
  }
}