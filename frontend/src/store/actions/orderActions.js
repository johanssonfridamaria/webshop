import actiontypes from '../actiontypes';

export const checkout = order => {
  return {
    type: actiontypes().orders.checkout,
    payload: order
  }
}

export const viewOrders = orders => {
  return {
    type: actiontypes().orders.viewOrders,
    payload: orders
  }
}