import React from 'react'

const cartProduct = ({ item }) => {
  return (
    <div className="shopping-cart__product">
      <img src={item.image} alt={item.name} />
      <div className="shopping-cart__price">
        <small><strong>{item.name}</strong></small>
        <small>{item.quantity} x {item.price} SEK</small>
        <div className="shopping-cart__buttons">
          <button className="btn-round">+</button>
          <button className="btn-round">-</button>
          <button className="btn-round trash"><i class="far fa-trash-alt"></i></button>
        </div>
      </div>


    </div>
  )
}

export default cartProduct
