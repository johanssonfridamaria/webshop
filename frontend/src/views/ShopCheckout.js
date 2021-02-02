import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import CustomerInfo from '../components/checkOut/CustomerInfo'
import Summary from '../components/checkOut/Summary'
import CartProduct from '../components/cart/CartProduct';


const ShopCheckout = () => {

  const shoppingCart = useSelector(state => state.cartReducer.cart);

  const empty = (
    <div className="shopping-cart__product">
      Your cart is empty
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