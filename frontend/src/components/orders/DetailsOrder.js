import React from 'react'

const DetailsOrder = ({ order }) => {

  const createdDate = new Date(order.created)
  const updatedDate = new Date(order.modified)

  return (
    <div>
      <div className="orderdetails-item">
        <p className="mr-2">Order number:</p>
        <p>{order._id}</p>
      </div>
      <div className="orderdetails-item">
        <p>Created:</p>
        <p>{createdDate.toLocaleString()}</p>
      </div>
      <div className="orderdetails-item">
        <p>Updated: </p>
        <p>{updatedDate.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default DetailsOrder
