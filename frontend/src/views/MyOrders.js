import OrderTable from '../components/orders/OrderTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInit, fetchUserOrders } from '../store/actions/orderActions';
import '../components/orders/MyOrders.scss'

const MyOrders = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userReducer.userId)
  const loading = useSelector(state => state.orderReducer.loading);
  const orders = useSelector(state => state.orderReducer.orders);

  useEffect(() => {
    dispatch(fetchInit())
    dispatch(fetchUserOrders(userId));
  }, [dispatch, userId])

  return (
    <div className="myorders">
      <div className="mb-2">
        <h2>Your orders</h2>
      </div>
      {
        loading && <p>Loading...</p>
      }
      {
        !orders && <p>You don't have any orders to view</p>
      }
      <OrderTable orders={orders} />
    </div>
  )
}

export default MyOrders
