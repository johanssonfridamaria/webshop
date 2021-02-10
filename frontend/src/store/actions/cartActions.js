import actiontypes from '../actiontypes';
import axios from '../../axios';

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const removeFromCart = product => {
  return {
    type: actiontypes().cart.remove,
    payload: product
  }
}

export const deleteFromCart = id => {
  return {
    type: actiontypes().cart.delete,
    payload: id
  }
}

export const clearCart = () => {
  return {
    type: actiontypes().cart.clear,
  }
}

export const checkoutCart = (order) => {
  return async (dispatch, getState) => {
    let id = getState().userReducer.userId;
    if (order.shoppingCart.length > 0) {
      let _order = {
        userId: id,
        cart: order.shoppingCart,
        quantity: order.totalCartQuantity,
        sum: order.totalCartAmount,
      }

      await axios.post('/orders/new', _order)
        .then(res => {
          if (res.status === 201) {
            dispatch(clearCart());
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else return
  }
}

export const toggleCart = () => {
  return {
    type: actiontypes().cart.toggleCart,
  }
}