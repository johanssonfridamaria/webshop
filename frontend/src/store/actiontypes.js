const actiontypes = () => {
  return {
    products: {
      fetchInit: 'FETCH_INIT',
      fetchSuccess: 'FETCH_SUCESS',
      fetchFail: 'FETCH_FAIL',
      fetchOneSuccess: 'FETCH_ONE_SUCESS',
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
      fetchInit: 'FETCH_INIT',
      fetchSuccess: 'FETCH_SUCESS',
      fetchFail: 'FETCH_FAIL',
      fetchOneSuccess: 'FETCH_ONE_SUCESS',
    },
  }
}

export default actiontypes;