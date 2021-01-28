import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="card__wrap--inner">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="mt-1">
          <h3>{product.name}</h3>
        </div>
        <div className="card__brand">
          <h5 >{product.brand}</h5>
        </div>
        <div className="flexible py-1">
        </div>
        <div className="price">
          <p>{product.price} SEK</p>
        </div>
        {/* <button className="btn-secondary">Add to cart</button> */}
      </div>
    </div>
  )
}

export default ProductCard
