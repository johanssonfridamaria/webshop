import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
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
    </Link>
  )
}

export default ProductCard
