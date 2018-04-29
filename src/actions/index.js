export const DRONE_DELIVERY = 'DRONE_DELIVERY'
export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const SELECT_TOPPINGS = 'SELECT_TOPPINGS'


export const droneDelivery = ( delivery ) => {
    return {
      type: DRONE_DELIVERY,
      payload: delivery
    }
  }

  export const selectBase = ( base ) => {
    return {
      type: SELECT_BASE,
      payload: base
    }
  }

  export const selectSauce = ( sauce ) => {
      return {
        type: SELECT_SAUCE,
        payload: sauce
      }
    }

    export const selectToppings = ( toppings ) => {
      return {
        type: SELECT_TOPPINGS,
        payload: toppings
      }
    }