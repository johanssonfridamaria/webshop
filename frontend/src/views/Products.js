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
    <div>
      <div className="product-display d-flex ">
        <div className="ml-auto">
          <i className="fas fa-th-list ml-2"></i>
          <i className="fas fa-th"></i>
        </div>
      </div>
      <div className="card__wrap--outer">
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
