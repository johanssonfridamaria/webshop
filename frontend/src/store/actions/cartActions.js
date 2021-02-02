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

export const checkoutCart = order => {
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
            console.log('success')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

// export const openCart = isOpen => {
//   return {
//     type: actiontypes().cart.openCart,
//     payload: isOpen
//   }
// }