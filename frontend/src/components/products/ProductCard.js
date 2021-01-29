import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="card__wrap--inner">
      <div className="card">
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.name} />
          <div className="mt-1">
            <h3>{product.name}</h3>
          </div>
        </Link>
        <div className="card__brand">
          <h5 >{product.brand}</h5>
        </div>
        <div className="flexible py-1">
        </div>
        <div className="price">
          <p>{product.price} SEK</p>
          <button className="btn-secondary" onClick={() => { dispatch(addToCart(product)) }}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
