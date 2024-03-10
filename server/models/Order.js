// orderDate, array products, productID, 

const { Schema, model } = require('mongoose')


const orderSchema = new Schema(
    {
        orderDate: {
            type: Date,
            default: Date.now
        },
        listItems: [
           {
            productName: {
                type: String, 
                required: true
            },
            productId: {
                type: String, 
                required: true
            }, 
            quantity: {
                type: Number, 
                required: true
            },
            price: {
                type: Number, 
                required: true
            }
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