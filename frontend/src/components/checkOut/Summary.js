import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomerInfo from './CustomerInfo';
import { checkoutCart } from '../../store/actions/cartActions';

const Summary = () => {

  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  const isLoggedIn = useSelector(state => state.userReducer.token);
  let error = useSelector(state => state.cartReducer.error);

  const sendOrder = () => {
    let order = {
      shoppingCart,
      totalCartAmount,
      totalCartQuantity
    }

    if (isLoggedIn) {
      dispatch(checkoutCart(order))
    } else {
      return
    }
  }


  return (
    <div>
      {
        isLoggedIn
          ? <CustomerInfo />
          : <Link to="/login" className="btn-secondary">Sign in</Link>
      }

      <div className="checkout__summary mt-2">
        <div className="checkout__summary-item">
          <p>Product cost</p>
          <p>{totalCartAmount}</p>
        </div>
        <div className="checkout__summary-item">
          <p>Shipping</p>
          <p>0</p>
        </div>
        <div className="checkout__summary-item__sum">
          <p>Total sum</p>
          <p>{totalCartAmount}</p>
        </div>
        {
          error && (
            <p>You have to sign in before sending the order</p>
          )
        }

        <button className="btn-secondary my-2" onClick={sendOrder}>Send order</button>

        <small>Note. This is only a fictional shop. The order is only sent to the database</small>
      </div>
    </div>
  )
}

export default Summary;
