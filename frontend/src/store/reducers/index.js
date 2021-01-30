import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import orderReducer from './oderReducer';
import userReducer from './userReducer';

export default combineReducers({
  productsReducer,
  cartReducer,
  authReducer,
  orderReducer,
  userReducer
});