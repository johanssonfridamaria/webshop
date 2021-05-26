import React from 'react';
import { useHistory } from 'react-router-dom'

const OrderConfirm = () => {
  let history = useHistory();

  return (
    <div className="orderConfirm">
      <h3 className="mb-2">Thanks for checking out my shop!</h3>
      {/* <h3 className="mb-2">Thanks for your order!</h3> */}
      <p className="mb-2">This is only a fictional shop, the order was only sent to the database.</p>
      <button className="btn btn-secondary" onClick={() => history.push('/')}>Go back to the shop</button>
    </div>
  )
}

export default OrderConfirm
