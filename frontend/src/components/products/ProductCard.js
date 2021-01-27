import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-text">
        <h2>{product.name}</h2>
        <h3>{product.brand}</h3>
        <p>{product.short}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
