const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
const auth = require('../authentication/auth');

router.get('/', auth.verifyToken, orderModel.getOrders);
router.get('/:id/orders', auth.verifyToken, orderModel.getOrderbyUserId);
router.post('/new', orderModel.createOrder);

module.exports = router;