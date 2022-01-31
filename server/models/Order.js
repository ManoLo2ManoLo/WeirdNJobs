const { Schema, model } = require('mongoose');

// create the order schema
const orderSchema = new Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
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