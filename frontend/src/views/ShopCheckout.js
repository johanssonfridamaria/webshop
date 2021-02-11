import React from 'react'
import { useSelector } from 'react-redux'
import Summary from '../components/checkOut/Summary'
import CartProduct from '../components/cart/CartProduct';
import { Link } from 'react-router-dom';

const ShopCheckout = () => {

  const shoppingCart = useSelector(state => state.cartReducer.cart);

  const empty = (
    <div className="shopping-cart__product">
      Your cart is empty
      <Link to="/" className="btn-secondary">Go back to shop</Link>
    </div>
  )

  return (
    <div className="checkout">
      <div className="checkout__bag">
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
      <div className="checkout__summary ml-4">
        <div className="mb-2">
          <h2>Order Summary</h2>
        </div>
        <Summary />
      </div>
    </div>
  )
}

export default ShopCheckout;