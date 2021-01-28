import actiontypes from '../actiontypes';
import axios from 'axios';

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}