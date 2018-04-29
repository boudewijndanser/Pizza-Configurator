import { SELECT_BASE } from '../actions/index'

const initialState = null

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case SELECT_BASE :
      return action.payload
    default :
      return state
  }
}