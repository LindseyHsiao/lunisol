// product name, description, product image, category, price, quantity, 

const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        // find out about type
        // productImage: {
        //     type: 
        // }, 
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        price: {
            type: Number,
            required: true
        }
        
    }
);

const Product = model('Product', productSchema);

module.exports= Product