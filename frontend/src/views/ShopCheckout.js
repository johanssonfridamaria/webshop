import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import CustomerInfo from '../components/checkOut/CustomerInfo'
import Summary from '../components/checkOut/Summary'
import CartProduct from '../components/cart/CartProduct';


const ShopCheckout = () => {
  const isLoggedIn = useSelector(state => state.userReducer.token);

  const history = useHistory();
  const shoppingCart = useSelector(state => state.cartReducer.cart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div className="shopping-cart__product">
      Your cart is empty
    </div>
  )

  return (
    <div className="checkout">
      <div className="">
        <div className="mb-2">
          <h2>Shoppingbag</h2>
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
      <div>
        <div className="mb-2">
          <h2>Order Summary</h2>
        </div>

        <Summary />
      </div>
      {/* {
        !isLoggedIn &&
      } */}
      {
        isLoggedIn && (
          <CustomerInfo />
        )
      }

    </div>
  )
}

export default ShopCheckout;