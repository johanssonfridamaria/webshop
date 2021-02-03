import actiontypes from '../actiontypes';
import axios from '../../axios';

export const fetchInit = payload => {
  return {
    type: actiontypes().orders.fetchInit,
    payload
  }
}

export const fetchUserOrders = id => {

  return async dispatch => {
    const res = await axios.get(`/orders/user/${id}`);
    if (res.status === 200) {
      dispatch(fetchSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

export const fetchOneOrder = id => {

  return async dispatch => {
    const res = await axios.get(`/orders/${id}`);
    if (res.status === 200) {
      dispatch(fetchOneSuccess(res.data))
    } else {
      dispatch(fetchFail())
    }
  }
}

export const fetchSuccess = orders => {
  return {
    type: actiontypes().orders.fetchSuccess,
    payload: orders
  }
}
export const fetchOneSuccess = order => {
  return {
    type: actiontypes().orders.fetchOneSuccess,
    payload: order
  }
}

export const fetchFail = payload => {
  return {
    type: actiontypes().orders.fetchFail,
    payload
  }
}

