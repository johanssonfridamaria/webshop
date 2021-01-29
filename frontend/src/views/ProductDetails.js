import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInit, fetchOneProduct } from '../store/actions/productsActions';
import { addToCart } from '../store/actions/cartActions';

const ProductDetails = () => {

  const id = useParams().id;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.productsReducer.loading);
  const product = useSelector(state => state.productsReducer.product);

  useEffect(() => {
    dispatch(fetchInit());
    dispatch(fetchOneProduct(id));
  }, [dispatch])

  return (
    <div>
      {
        loading && !product && <p>Loading...</p>
      }
      {
        product && <div className="product mb-5">
          <img src={product.image} alt={product.name} />
          <div className="product__details">
            <div className="mt-1">
              <h3>{product.name}</h3>
              <h5 className="product__brand">{product.brand}</h5>
            </div>
            <div className="py-1">
              <p>{product.short}</p>
            </div>
            <p className="product__price mb-2">{product.price} SEK</p>
            <button className="btn-secondary" onClick={() => { dispatch(addToCart(product)) }}>Add to cart</button>
          </div>
        </div>
      }

    </div>
  )
}

export default ProductDetails
