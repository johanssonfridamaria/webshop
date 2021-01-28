import React from 'react'

const cartProduct = ({ item }) => {
  return (
    <div className="shopping-cart__product">
      <img src={item.image} alt={item.name} />
      <div className="shopping-cart__product-price">
        <small><strong>{item.name}</strong></small>
        <small>{item.quantity} x {item.price} SEK</small>
      </div>


    </div>
  )
}

export default cartProduct
