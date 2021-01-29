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
    if (res.status === 200) {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

export const fetchOneProduct = id => {

  return async dispatch => {
    const res = await axios.get(`/products/${id}`);
    if (res.status === 200) {
      dispatch(fetchOneSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

export const fetchSuccess = products => {
  return {
    type: actiontypes().products.fetchSuccess,
    payload: products
  }
}
export const fetchOneSuccess = product => {
  return {
    type: actiontypes().products.fetchOneSuccess,
    payload: product
  }
}

export const fetchFail = payload => {
  return {
    type: actiontypes().products.fetchFail,
    payload
  }
}



