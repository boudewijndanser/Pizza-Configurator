import { SELECT_SAUCE } from '../actions/index'

const initialState = null

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case SELECT_SAUCE :
      return action.payload
    default :
      return state
  }
}