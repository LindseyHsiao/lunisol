// array of products, productId, quantity

const { Schema, model } = require('mongoose');


const cartSchema = new Schema(
    {
        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        quantity: {
            type: Number,
            required: true
        }
    }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart