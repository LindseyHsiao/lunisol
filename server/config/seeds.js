const db = require('./connection')
const {Product, Category} = require('../models')
const cleanDb =  require('./cleanDb')

db.once('open', async ()=> {
await cleanDb('Product', 'products')
await cleanDb('Category', 'categories')
const categories = await Category.insertMany(
    [
        {
            category: 'category  one'
        },
        {
            category: ' category two'
        }
    ]
);

console.log('categories inserted');

const products =  await Product.insertMany(
    [
        {
            productName: 'product one',
            description: 'asdasdas',
            productImage: 'asdasd',
            category: categories[0]._id,
            price: 10.99,
            stock: 150
        },
        {
            productName: 'product two',
            description: 'fghfhfg',
            productImage: 'hhh',
            category: categories[1]._id,
            price: 5.99,
            stock: 2000
        },
        // {
        //     productName: '',
        //     description: '',
        //     productImage: '',
        //     category: '',
        //     price: 0,
        //     stock: 0
        // },
        // {
        //     productName: '',
        //     description: '',
        //     productImage: '',
        //     category: '',
        //     price: 0,
        //     stock: 0
        // }
    ]
);

console.log('products inserted');

process.exit()

})