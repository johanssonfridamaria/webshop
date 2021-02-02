import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../components/cart/CartProduct';
import { fetchInit, fetchUserOrders } from '../store/actions/orderActions';


const MyOrders = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userReducer.userId)
  const loading = useSelector(state => state.orderReducer.loading);
  const orders = useSelector(state => state.orderReducer.orders);

  useEffect(() => {
    console.log(loading, orders, userId)
    dispatch(fetchInit())
    dispatch(fetchUserOrders(userId));
  }, [dispatch, userId])


  return (
    <div>
      {
        loading && !orders && <p>Loading...</p>
      }
      {
        orders && orders.map(order => (
          <CartProduct item={product} key={product._id} />
        ))
      }
    </div>
  )
}

export default MyOrders
