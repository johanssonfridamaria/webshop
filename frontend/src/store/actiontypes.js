const actiontypes = () => {
  return {
    products: {
      fetchInit: 'FETCH_PRODUCT_INIT',
      fetchSuccess: 'FETCH_PRODUCT_SUCCESS',
      fetchFail: 'FETCH_PRODUCT_FAIL',
      fetchOneSuccess: 'FETCH_ONE_PRODUCT_SUCCESS',
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_FROM_CART',
      clear: 'CLEAR_CART',
      openCart: 'OPEN_CART',
      checkout: 'CHECKOUT',
      toggleCart: 'TOGGLE_CART'
    },
    user: {
      loginSuccess: 'LOGIN_SUCCESS',
      fail: 'FAIL',
      logout: 'LOGOUT',
      exists: 'USER_EXISTS'
    },
    orders: {
      fetchInit: 'FETCH_ORDER_INIT',
      fetchSuccess: 'FETCH_ORDER_SUCCESS',
      fetchFail: 'FETCH_ORDER_FAIL',
      fetchOneSuccess: 'FETCH_ONE_ORDER_SUCCESS',
    },
  }
}

export default actiontypes;