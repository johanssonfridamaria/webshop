import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../../store/actions/cartActions';

const CartProduct = ({ item }) => {

  const dispatch = useDispatch();

  return (
    <div className="shopping-cart__product">
      <img src={item.image} alt={item.name} />
      <div className="shopping-cart__price">
        <small><strong>{item.name}</strong></small>
        <small>{item.quantity} x {item.price} SEK</small>
        <div className="shopping-cart__buttons">
          <button className="btn-round" onClick={() => { dispatch(addToCart(item)) }}>+</button>
          <button className="btn-round" onClick={() => { dispatch(removeFromCart(item)) }}>-</button>
          <button className="btn-round trash" onClick={() => { dispatch(deleteFromCart(item._id)) }}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>


    </div>
  )
}

export default CartProduct
