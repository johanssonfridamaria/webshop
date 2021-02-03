import React, { useEffect, useState } from 'react'

const ProductOrder = ({ item }) => {

  const [totalprice, setTotalprice] = useState(0)

  const getProductTotalPrice = (qty, price) => {
    const total = qty * price;
    setTotalprice(total)
    return setTotalprice;
  }

  useEffect(() => {
    getProductTotalPrice(item.quantity, item.price)
  })

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
        <small>{totalprice}:-</small>
      </div>
    </div>
  )
}

export default ProductOrder
