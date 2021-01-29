import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  quantity: 1,
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex;


  switch (action.type) {
    case actiontypes().cart.add:
      let product = action.payload;

      itemIndex = state.cart.findIndex(item => item._id === product._id)

      if (itemIndex < 0) {
        product.quantity += state.quantity
        state.cart = [...state.cart, product]
      } else {
        state.cart[itemIndex].quantity += state.quantity
      }

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

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

const getTotalQuantity = cart => {
  let totalQuantity = 0;

  cart.forEach(product => {
    totalQuantity += product.quantity
  })

  return totalQuantity;
}

const getTotalAmount = cart => {
  let totalAmount = 0;

  cart.forEach(product => {
    totalAmount += product.price * product.quantity
  })

  return totalAmount;
}



export default cartReducer;