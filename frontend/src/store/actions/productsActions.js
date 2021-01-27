import actiontypes from '../actiontypes';
import axios from '../../axios';

export const fetchInit = payload => {
  return {
    type: actiontypes().products.fetchInit,
    payload
  }
}

export const fetchProducts = () => {
  
  return async dispatch => {
    const res = await axios.get('/products');
    console.log(res)
    if (res.status === 200) {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    } 
  }
}

export const fetchSuccess = products => {
  console.log(products)
  return {
    type: actiontypes().products.fetchSuccess,
    payload: products
  }
}

export const fetchFail = payload => {
  return {
    type: actiontypes().products.fetchFail,
    payload
  }
}



