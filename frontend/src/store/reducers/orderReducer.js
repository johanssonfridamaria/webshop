import actiontypes from '../actiontypes';

const initState = {
  loading: false,
  error: false,
  orders: null,
  order: null,
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().orders.fetchInit:
      return {
        ...state,
        loading: true
      }
    case actiontypes().orders.fetchSuccess:
      return {
        orders: action.payload,
        loading: false,
        error: false
      }
    case actiontypes().orders.fetchFail:
      return {
        ...state,
        loading: false,
        error: true
      }
    // case actiontypes().orders.fetchOneSuccess:
    //   return {
    //     order: action.payload,
    //     loading: false,
    //     error: false
    //   }

    default:
      return state;
  }


}

export default orderReducer;