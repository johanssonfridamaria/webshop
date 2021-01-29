import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

export default combineReducers({
  productsReducer,
  cartReducer,
  authReducer
});