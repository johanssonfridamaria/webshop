import React from 'react'

const ProductOrder = ({ item }) => {



  return (
    <div className="orderdetails__product">
      <div className="orderdetails__productName">
        <img src={item.image} alt={item.name} />
        <strong className="ml-1">{item.name}</strong>
      </div>
      <div>
        <small>{item.quantity} pcs </small>
      </div>
      <div>
        <small>{item.price}:-</small>
      </div>
    </div>
  )
}

export default ProductOrder
