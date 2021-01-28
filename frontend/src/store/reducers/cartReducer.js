import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {

  switch (action.type) {
    case actiontypes().cart.add:

      return state
    case actiontypes().cart.remove:

      return state
    case actiontypes().cart.delete:

      return state
    case actiontypes().cart.clear:
      return {
        ...state,
        cart: [],
        totalCartAmount: 0,
        totalCartQuantity: 0,
      }

    default:


      return state

  }

}

export default cartReducer;