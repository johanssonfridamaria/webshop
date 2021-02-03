import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInit, fetchUserOrders } from '../../store/actions/orderActions';
import Order from './Order';

const OrderTable = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userReducer.userId)
  const loading = useSelector(state => state.orderReducer.loading);
  const orders = useSelector(state => state.orderReducer.orders);

  useEffect(() => {
    dispatch(fetchInit())
    dispatch(fetchUserOrders(userId));
  }, [dispatch, userId])

  return (
    <div>
      {
        loading && !orders && <p>Loading...</p>
      }
      {
        !orders && <p>You don't have any orders to view</p>
      }
      <table className="order-table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Order no.</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total amount</th>
          </tr>
        </thead>
        <tbody>
          {
            orders && orders.map(order => (
              <Order order={order} key={order._id} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable;
