import React from 'react';
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ShoppingCart = ({ toggleBag }) => {

  const history = useHistory();
  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div className="shopping-cart__product">
      Your cart is empty
    </div>
  )

  const onCheckout = () => {
    toggleBag()
    history.push('/checkout')
  }

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
        <button className="btn-primary" onClick={onCheckout}>Go to checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
