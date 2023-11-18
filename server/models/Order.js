// orderDate, array products, productID, quantity

const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
    {
        oderDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
                // should we include quantity of each product here?
            }
        ],
        oderId: {
            type: String,
            required: true
        }, 
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
            // ***check this part ***
        }
    }
);

const Order = model('Order', orderSchema);

module.exports = Order