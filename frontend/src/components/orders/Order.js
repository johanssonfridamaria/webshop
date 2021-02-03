import React from 'react'

const Order = ({ order }) => {

  let date = new Date(order.created);

  return (
    <tr>
      <td>{date.toLocaleDateString()}</td>
      <td>{order._id}</td>
      <td>{order.quantity}</td>
      <td>{order.sum}</td>
    </tr>
  )
}

export default Order
