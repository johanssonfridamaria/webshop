import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInit, fetchOneOrder } from '../store/actions/orderActions';
import ProductOrder from '../components/orders/ProductOrder';
import DetailsOrder from '../components/orders/DetailsOrder';


const OrderDetails = () => {

  const id = useParams().id;
  const dispatch = useDispatch();
  const loading = useSelector(state => state.orderReducer.loading);
  const order = useSelector(state => state.orderReducer.order);

  useEffect(() => {
    dispatch(fetchInit());
    dispatch(fetchOneOrder(id))
  }, [dispatch, id])

  return (
    <div className="orderdetails">
      <div className="orderdetails__container mb-2">
        <div className="mb-1">
          <h2>Order Details</h2>
        </div>
        {
          loading && !order && <p>Loading...</p>
        }
        {
          order && <DetailsOrder order={order} />
        }
      </div>
      <div className="orderdetails__container">
        <div className="mb-1">
          <h2>Your Order</h2>
        </div>
        {
          loading && !order && <p>Loading...</p>
        }
        {
          order && order.cart.map(product => (
            <ProductOrder key={product._id} item={product} />
          ))
        }

        {order &&
          <div>
            <div className="orderdetails-item">
              <p>Shipping</p>
              <p>0:-</p>
            </div>
            <div className="orderdetails-item__sum">
              <p>Total sum</p>
              <p>{order.sum}:-</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default OrderDetails
