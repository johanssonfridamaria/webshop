import React from 'react'
import { useSelector } from 'react-redux'
import Summary from '../components/checkOut/Summary'
import CartProduct from '../components/cart/CartProduct';
import { Link } from 'react-router-dom';

const ShopCheckout = () => {

  const shoppingCart = useSelector(state => state.cartReducer.cart);

  const empty = (
    <div className="flex-column">
      <p className="mb-2">Your cart is empty</p>
      <Link to="/" className="btn-secondary">Go back to shop</Link>
    </div>
  )

  return (
    <div className="section__wrap--outer">
      <div className="section__wrap--inner mb-2">
        <div className="mb-2">
          <h2>Shopping bag</h2>
        </div>
        {
          shoppingCart && shoppingCart.map(product => (
            <CartProduct key={product._id} item={product} />
          ))
        }
        {
          shoppingCart.length < 1 && empty
        }
      </div>
      <div className="section__wrap--inner">
        <div className="mb-2">
          <h2>Order Summary</h2>
        </div>
        <Summary />
      </div>
    </div>
  )
}

export default ShopCheckout;