import React from 'react';
import CartProduct from './CartProduct';
import { useSelector, useDispatch } from 'react-redux';
import cartReducer from '../../store/reducers/cartReducer';

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div>
      Your cart is empty
    </div>
  )

  return (
    <div className="shopping-cart__inner">
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} item={product} />
        ))
      }
      {
        !shoppingCart && empty
      }

      <div className="shopping-cart__inner-bottom">
        <div className="shopping-cart__total">
          <p>{totalCartQuantity} PCS</p>
          <p>Total: {totalCartAmount} SEK</p>
        </div>
        <button className="btn-primary">Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
