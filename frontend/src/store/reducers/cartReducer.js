import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';
require('dotenv').config({ path: '/backend' });

const secretKey = process.env.SECRET_KEY;

const initState = {
  cart: [],
  // quantity: 1,
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const delFromCart = id => {
  initState.cart = initState.cart.filter(item => item._id !== id);
  return initState.cart;
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
        ? delFromCart(action.payload._id)
        : action.payload.quantity -= 1

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      // localStorage.setItem('JAYew4vrGpzQe4fVe2NFVbpaMWaKJEB5', jwt.sign(state, secretKey))
      localStorage.setItem('cart', JSON.stringify(state))

      return state

    case actiontypes().cart.delete:
      delFromCart(action.payload)

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      // localStorage.setItem('JAYew4vrGpzQe4fVe2NFVbpaMWaKJEB5', jwt.sign(state, secretKey))
      localStorage.setItem('cart', JSON.stringify(state))

      return state

    default:
      // let cart = jwt.decode(localStorage.getItem('JAYew4vrGpzQe4fVe2NFVbpaMWaKJEB5'))
      let cart = JSON.parse(localStorage.getItem('cart'))

      console.log(cart)
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