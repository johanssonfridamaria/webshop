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
      {/* {
      products && products.map(product => (
        <ProductCard product={product} key={product._id}/>
      ))
      } */}
      {
        loading
          ? <p>Loading...</p>
          : products && products.map(product => (
            <ProductCard product={product} key={product._id} />
          ))
      }
    </div>
  )
}

export default Products
