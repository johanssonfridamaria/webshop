import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInit, fetchOneOrder } from '../store/actions/orderActions';
import ProductOrder from '../components/orders/ProductOrder';
import DetailsOrder from '../components/orders/DetailsOrder';
import Spinner from '../components/spinner/Spinner';


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
    <div className="section__wrap--outer">
      <div className="section__wrap--inner mb-2">
        <div className="mb-1">
          <h2>Order Details</h2>
        </div>
        {
          loading && !order && <Spinner />
        }
        {
          order && <DetailsOrder order={order} />
        }
      </div>
      <div className="section__wrap--inner">
        <div className="mb-1">
          <h2>Your Order</h2>
        </div>
        {
          loading && !order && <Spinner />
        }
        {
          order && order.cart.map(product => (
            <ProductOrder key={product._id} item={product} />
          ))
        }

        {order &&
          <div>
            <div className="section__item">
              <p>Shipping</p>
              <p>0:-</p>
            </div>
            <div className="section__item__sum">
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
