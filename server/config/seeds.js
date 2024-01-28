const db = require('./connection')
const { Product, Category } = require('../models')
const cleanDb = require('./cleanDb')

db.once('open', async () => {
    await cleanDb('Product', 'products')
    await cleanDb('Category', 'categories')
    const categories = await Category.insertMany(
        [
            {
                category: 'Roll Ons'
            },
            {
                category: 'Scrubs'
            },
            {
                category: 'Mists'
            },
            {
                category: 'Salves'
            },
            {
                category: 'Seasonal'
            },

        ]
    );

    console.log('categories inserted');

    const products = await Product.insertMany(
        [
            {
                productName: 'Zen Roll On',
                description: 'Roll on description',
                productImage: 'https://github.com/LindseyHsiao/lunisol/blob/main/client/src/assets/promo.jpeg?raw=true',
                category: categories[0]._id,
                price: 13.00,
                stock: 150
            },
            {
                productName: 'Sleepi Roll On',
                description: 'Roll on description',
                productImage: 'https://github.com/LindseyHsiao/lunisol/blob/main/client/src/assets/alexaYoga.jpg?raw=true',
                category: categories[0]._id,
                price: 13.00,
                stock: 150
            },
            {
                productName: 'Energi Roll On',
                description: 'Roll on description',
                productImage: 'asdasd',
                category: categories[0]._id,
                price: 13.00,
                stock: 150
            },
            {
                productName: 'Tea Tree Face Mist',
                description: 'Face Mist description',
                productImage: 'hhh',
                category: categories[1]._id,
                price: 5.99,
                stock: 2000
            },
            {
                productName: 'Sana Head2Toe Healing Salve',
                description: 'Healing Salve description',
                productImage: 'hhh',
                category: categories[1]._id,
                price: 5.99,
                stock: 2000
            },
            {
                productName: 'Sugar Scrub',
                description: 'Sugar Scrub description',
                productImage: 'hhh',
                category: categories[1]._id,
                price: 5.99,
                stock: 2000
            }
        ]
    );

    console.log('products inserted');

    process.exit()

})