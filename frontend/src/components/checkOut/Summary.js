import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CartProduct from '../cart/CartProduct';
import CheckOutProd from './CheckOutProd';

const Summary = () => {

  const history = useHistory();
  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  const isLoggedIn = useSelector(state => state.userReducer.token);

  return (
    <div className="checkout__summary">
      <p>Total Number of Articles {totalCartQuantity}</p>
      <p>Total sum: {totalCartAmount} </p>

      {
        isLoggedIn
          ? <button className="btn-primary" onClick={onCheckout}>Send order</button>
          : <p>You have to sign in before sending the order <Link>Sign in</Link></p>

      }

    </div>
  )
}

export default Summary;
