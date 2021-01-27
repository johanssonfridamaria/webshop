import actiontypes from '../actiontypes';
import axios from '../../axios'

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
      return {
        products: action.payload,
        loading: false,
        error: false
      }
      case actiontypes().products.fetchFail:
        return  {
          ...state,
          loading: false,
          error: true
        }
    default:
      return state;
  }

}

export default productsReducer;