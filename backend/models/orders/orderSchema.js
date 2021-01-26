const mongodb = require('mongoose');
const ObjectId = mongodb.Schema.Types.ObjectId;

const orderSchema = mongodb.Schema({

  _id: ObjectId,
  user: {type: ObjectId, ref: 'User', required:true},
  cart: {type: Object, required: true },

  created:        {type:Date, default: Date.now()},
  modified:        {type:Date, default: Date.now()}
})

module.exports = mongodb.model('Order', orderSchema);