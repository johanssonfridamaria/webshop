import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInit, fetchProducts } from '../store/actions/productsActions';
import productsReducer from '../store/reducers/productsReducer';


const Products = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.productsReducer.loading);
  const products = useSelector(state => state.productsReducer.products);


  useEffect(() => {
    // dispatch(fetchInit())
    console.log(products)
    dispatch(fetchProducts());
  }, [dispatch])


  return (
    <div>
      {
        loading
          ? <p>Loading...</p>
          : products.map(product => (
            <p>{product.name}</p>
          ))
      }
    </div>
  )
}

export default Products
