const mongodb = require('mongoose');
const ObjectId = mongodb.Schema.Types.ObjectId;

const orderSchema = mongodb.Schema({

  _id: ObjectId,
  userId: { type: ObjectId, ref: 'User', required: true },
  cart: { type: Array, required: true },
  quantity: { type: Number, required: true },
  sum: { type: Number, required: true },

  created: { type: Date, default: Date.now() },
  modified: { type: Date, default: Date.now() }
})

module.exports = mongodb.model('Order', orderSchema);