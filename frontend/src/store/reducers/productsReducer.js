import actiontypes from '../actiontypes';

const initState = {
  loading: false,
  error: false,
  products: null,
  product: null
}

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().products.fetchInit:
      return {
        ...state,
        loading: true
      }
    case actiontypes().products.fetchSuccess:
      console.log(action.payload)
      return {
        products: action.payload,
        loading: false,
        error: false
      }
    case actiontypes().products.fetchFail:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actiontypes().products.fetchOneSuccess:
      console.log(action.payload)
      return {
        product: action.payload,
        loading: false,
        error: false
      }

    default:
      return state;
  }

}

export default productsReducer;