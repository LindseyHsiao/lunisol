// orderDate, array products, productID, 

const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
    {
        orderDate: {
            type: Date,
            default: Date.now
        },
        products: [
            // need an item schema: productname, productId, quantity ordered, price per item, 
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        // isPaid, isShipped, totalprice

        
    }
);

const Order = model('Order', orderSchema);

module.exports = Order