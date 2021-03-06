import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../../store/actions/cartActions';

const CartProduct = ({ item, setOpenCart }) => {

  const dispatch = useDispatch();

  return (
    <div className="shopping-cart__product">
      <img src={item.image} alt={item.name} />
      <div className="shopping-cart__price">
        <small><strong>{item.name}</strong></small>
        <small>{item.quantity} x {item.price} SEK</small>
        <div className="shopping-cart__buttons">
          <button className="btn-round-primary" onClick={() => {
            dispatch(addToCart(item));
            setOpenCart(true);
          }}>+</button>
          <button className="btn-round-primary" onClick={() => { dispatch(removeFromCart(item)) }}>-</button>
          <button className="btn-round-primary trash" onClick={() => { dispatch(deleteFromCart(item._id)) }}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    </div >
  )
}

export default CartProduct
