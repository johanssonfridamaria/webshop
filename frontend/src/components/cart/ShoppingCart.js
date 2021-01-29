import React, { useEffect } from 'react';
import CartProduct from './CartProduct';
import { useSelector, useDispatch } from 'react-redux';
import cartReducer from '../../store/reducers/cartReducer';

const ShoppingCart = () => {

  const dispatch = useDispatch();

  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div className="shopping-cart__product">
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
        shoppingCart.length < 1 && empty
      }

      <div className="shopping-cart__inner-bottom">
        <div className="shopping-cart__total">
          <p>{totalCartQuantity} PCS</p>
          <p>Total: {totalCartAmount} SEK</p>
        </div>
        <button className="btn-primary">Go to checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
