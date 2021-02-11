import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { fetchInit, fetchProducts } from '../store/actions/productsActions';


const Products = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.productsReducer.loading);
  const products = useSelector(state => state.productsReducer.products);


  useEffect(() => {
    dispatch(fetchInit())
    dispatch(fetchProducts());
  }, [dispatch])


  return (
    <div>
      <div className="card__wrap--outer mt-1">
        {
          loading && !products && <p>Loading...</p>
        }
        {
          products && products.map(product => (
            <ProductCard product={product} key={product._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Products
