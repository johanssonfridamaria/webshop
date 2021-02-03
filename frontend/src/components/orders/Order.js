import React from 'react';
import { useHistory } from 'react-router-dom';

const Order = ({ order }) => {

  const history = useHistory();
  let date = new Date(order.created);


  return (
    <tr className="order-no" onClick={() => { history.push(`/orders/${order._id}`) }}>
      <td>{date.toLocaleDateString()}</td>
      <td>{order._id}</td>
      <td>{order.quantity} pcs</td>
      <td>{order.sum} sek</td>
    </tr>
  )
}

export default Order
