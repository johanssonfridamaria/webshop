import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="card-text">
        <h3>{product.name}</h3>
        <h4>{product.brand}</h4>
        <p>{product.short}</p>
        <p>{product.price} SEK</p>
      </div>
    </div>
  )
}

export default ProductCard
