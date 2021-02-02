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
      clear: 'CLEAR_CART'
    },
    user: {
      loginSuccess: 'LOGIN_SUCCESS',
      loginFailed: 'LOGIN_FAILED',
      logout: 'LOGOUT',
      register: 'REGISTER'
    },
    orders: {
      checkout: 'CHECKOUT',
      viewOrders: 'VIEW_ORDERS',
    },
  }
}

export default actiontypes;