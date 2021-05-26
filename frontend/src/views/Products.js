import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import Spinner from '../components/spinner/Spinner';
import { fetchInit, fetchProducts } from '../store/actions/productsActions';


const Products = ({ openCart, setOpenCart }) => {

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
          loading && !products && <Spinner />
        }
        {
          products && products.map(product => (
            <ProductCard product={product} key={product._id} openCart={openCart} setOpenCart={setOpenCart} />
          ))
        }
      </div>
    </div>
  )
}

export default Products
