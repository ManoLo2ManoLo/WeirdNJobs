const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// create the order schema
const orderSchema = new Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now,
            get: purchaseDateVal => dateFormat(purchaseDateVal)
        },

        services: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Service'
            }
        ]
    }
)

// create the order model
const Order = model('Order', orderSchema);

module.exports = Order;