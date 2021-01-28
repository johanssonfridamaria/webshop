const mongodb = require('mongoose');
const ObjectId = mongodb.Schema.Types.ObjectId;

const productSchema = mongodb.Schema({

    _id: ObjectId,
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    short: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, default: 0 },

    created: { type: Date, default: Date.now() },
    modified: { type: Date, default: Date.now() }
});

module.exports = mongodb.model('Product', productSchema);

