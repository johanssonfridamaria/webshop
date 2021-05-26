import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
  error: false
}

const cartReducer = (state = initState, action) => {
  let itemIndex;
  let secondState;

  switch (action.type) {

    case actiontypes().cart.add:

      let newState = { ...state, cart: [...state.cart.map(item => ({ ...item }))] };
      let product = action.payload;

      itemIndex = state.cart.findIndex(item => item._id === product._id)

      if (itemIndex < 0) {
        product.quantity += 1
        newState.cart = [...state.cart, product]
      } else {
        newState.cart[itemIndex].quantity += 1
      }

      newState.totalCartQuantity = getTotalQuantity(newState.cart);
      newState.totalCartAmount = getTotalAmount(newState.cart);

      localStorage.setItem('cart', JSON.stringify(newState))

      return newState

    case actiontypes().cart.remove:

      let nextState = { ...state, cart: [...state.cart.map(item => ({ ...item }))] };

      if (action.payload.quantity === 1) {
        nextState.cart = nextState.cart.filter(item => item._id !== action.payload._id)
      } else {
        const item = nextState.cart.find(item => item._id === action.payload._id);
        item.quantity -= 1;
      }

      nextState.totalCartAmount = getTotalAmount(nextState.cart);
      nextState.totalCartQuantity = getTotalQuantity(nextState.cart);

      localStorage.setItem('cart', JSON.stringify(nextState));

      return nextState;

    case actiontypes().cart.delete:
      secondState = {
        ...state,
        cart: [
          ...state.cart = state.cart.filter(item => item._id !== action.payload)
        ],
      }
      secondState.totalCartAmount = getTotalAmount(secondState.cart);
      secondState.totalCartQuantity = getTotalQuantity(secondState.cart);

      localStorage.setItem('cart', JSON.stringify(secondState))
      return secondState;

    case actiontypes().cart.clear:
      return {
        ...state,
        cart: [],
        totalCartAmount: 0,
        totalCartQuantity: 0,
      }

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
