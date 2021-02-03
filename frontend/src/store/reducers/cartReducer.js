import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
  isOpen: false,
  error: false,
}


const cartReducer = (state = initState, action) => {
  let itemIndex;


  switch (action.type) {
    case actiontypes().cart.add:
      let product = action.payload;

      itemIndex = state.cart.findIndex(item => item._id === product._id)

      if (itemIndex < 0) {
        product.quantity += 1
        state.cart = [...state.cart, product]
      } else {
        state.cart[itemIndex].quantity += 1
      }

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      localStorage.setItem('cart', JSON.stringify(state))

      return state

    case actiontypes().cart.remove:

      action.payload.quantity === 1
        ? state.cart = state.cart.filter(item => item._id !== action.payload._id)
        : action.payload.quantity -= 1

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      localStorage.setItem('cart', JSON.stringify(state))

      return state

    case actiontypes().cart.delete:
      console.log(action.payload)
      state.cart = state.cart.filter(item => item._id !== action.payload);

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      localStorage.setItem('cart', JSON.stringify(state))

      return state

    // case actiontypes().cart.openCart:
    //   state.isOpen = !action.payload
    //   return state


    case actiontypes().cart.clear:
      state.shoppingCart = []
      state.totalCartAmount = 0
      state.totalCartQuantity = 0

      return state

    default:
      let cart = JSON.parse(localStorage.getItem('cart'))

      if (cart)
        state = cart

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