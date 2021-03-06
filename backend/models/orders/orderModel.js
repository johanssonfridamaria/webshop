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
//get all orders
exports.getOneOrder = (req, res) => {
  Order.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.satus(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get order',
      error: err
    }))
}

//get order with a specific user id
exports.getOrderbyUserId = (req, res) => {
  Order.find({ userId: req.params.id })
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
    userId: req.body.userId,
    cart: req.body.cart,
    quantity: req.body.quantity,
    sum: req.body.sum,
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