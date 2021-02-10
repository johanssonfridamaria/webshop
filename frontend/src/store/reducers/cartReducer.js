import actiontypes from '../actiontypes';

const initState = {
  cart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
  isOpen: false,
  error: false
}

const cartReducer = (state = initState, action) => {
  let itemIndex;
  let nextState;

  switch (action.type) {

    case actiontypes().cart.add:

      let newState = { ...state, cart: [...state.cart] };

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

      newState.isOpen = true;
      return newState

    case actiontypes().cart.remove:
      // let nextState = { ...state, cart: [...state.cart] };




      // action.payload.quantity === 1
      //   ? nextState.cart = state.cart.filter(item => item._id !== action.payload._id)
      //   : action.payload.quantity -= 1

      // nextState.totalCartQuantity = getTotalQuantity(nextState.cart);
      // nextState.totalCartAmount = getTotalAmount(nextState.cart);



      nextState = {
        ...state,
        totalCartAmount: getTotalAmount(state.cart),
        totalCartQuantity: getTotalQuantity(state.cart),
        cart: [
          ...(action.payload.quantity === 1 ?
            state.cart.filter(x => x._id !== action.payload._id)
            :
            state.cart.map(x => x._id === action.payload._id ? { ...x, quantity: x.quantity - 1 } : x))
        ]
      };
      localStorage.setItem('cart', JSON.stringify(nextState));
      return nextState;

    case actiontypes().cart.delete:
      state.cart = state.cart.filter(item => item._id !== action.payload);

      state.totalCartQuantity = getTotalQuantity(state.cart);
      state.totalCartAmount = getTotalAmount(state.cart);

      localStorage.setItem('cart', JSON.stringify(state))

      return state

    case actiontypes().cart.toggleCart:
      state.isOpen = !state.isOpen
      return state;

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
