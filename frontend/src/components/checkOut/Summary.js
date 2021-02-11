import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CustomerInfo from './CustomerInfo';
import { checkoutCart } from '../../store/actions/cartActions';

const Summary = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  const isLoggedIn = useSelector(state => state.userReducer.token);

  const [loginError, setLoginError] = useState(false);
  const [cartError, setCartError] = useState(false);


  const sendOrder = () => {
    let order = {
      shoppingCart,
      totalCartAmount,
      totalCartQuantity
    }

    if (isLoggedIn) {
      setLoginError(false)
      if (order.shoppingCart > 0) {
        setCartError(false)
        dispatch(checkoutCart(order))
        history.push('/confirmorder')
      } else {
        return setCartError(true)
      }
    } else {
      setLoginError(true)
    }
  }

  return (
    <div>
      {
        isLoggedIn
          ? <CustomerInfo />
          : <Link to="/login" className="btn-secondary">Sign in</Link>
      }

      <div className="flex-column mt-2">
        <div className="section__item">
          <p>Product cost</p>
          <p>{totalCartAmount}</p>
        </div>
        <div className="section__item">
          <p>Shipping</p>
          <p>0</p>
        </div>
        <div className="section__item__sum">
          <p>Total sum</p>
          <p>{totalCartAmount}</p>
        </div>
        {
          loginError && (
            <p className="error"><small>You have to sign in before sending the order</small></p>
          )
        }
        {
          cartError && (
            <p className="error"><small>Your cart is empty!</small></p>
          )
        }

        <button className="btn-secondary my-2" onClick={sendOrder}>Send order</button>

        <small>Note. This is only a fictional shop. The order is only sent to the database</small>
      </div>
    </div>
  )
}

export default Summary;
