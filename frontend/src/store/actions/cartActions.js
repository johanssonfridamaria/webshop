import actiontypes from '../actiontypes';
import axios from 'axios';

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const removeFromCart = product => {
  return {
    type: actiontypes().cart.remove,
    payload: product
  }
}

export const deleteFromCart = id => {
  return {
    type: actiontypes().cart.delete,
    payload: id
  }
}