const mongodb = require('mongoose');
const Order = require('./orderSchema');

//get all orders
exports.getOrders = (req, res) => {
  Order.find().populate('user')
    .then(data => res.status(200).json(data))
    .catch(err => res.satus(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get orders',
      error: err
    }))
}

//get order with a specific user id
exports.getOrderbyUserId = (req, res) => {
  Order.find({ 'user': req.params.id })
    .then(data => {
      return res.status(200).json(data)
    })
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to user orders',
      error: err,
    }));
}

exports.createOrder = (req, res) => {

  const order = new Order({
    _id: new mongodb.Types.ObjectId,
    user: req.body.user,
    cart: req.body.cart
  })
  order.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Order created'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create order'
      })
    })
}