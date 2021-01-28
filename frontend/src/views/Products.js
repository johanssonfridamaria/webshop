import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { fetchInit, fetchProducts } from '../store/actions/productsActions';
import productsReducer from '../store/reducers/productsReducer';


const Products = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.productsReducer.loading);
  const products = useSelector(state => state.productsReducer.products);


  useEffect(() => {
    dispatch(fetchInit())
    dispatch(fetchProducts());
    console.log(products)
  }, [dispatch])


  return (
    <div className="mt-1">
      <div className="product-display mx-3">
        <i className="fas fa-th-list mr-1"></i>
        <i className="fas fa-th"></i>
      </div>
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
