import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
// import orderReducer from './orderReducer';
import userReducer from './userReducer';

export default combineReducers({
  productsReducer,
  cartReducer,
  // orderReducer,
  userReducer
});