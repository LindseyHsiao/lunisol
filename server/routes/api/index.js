const router = require('express').Router();
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const categoryRoutes =  require('./categoryRoutes')
const stripeRoutes = require('./stripeRoutes')
const orderRoutes = require('./orderRoutes')


router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)
router.use('/payment', stripeRoutes)
router.use('/orders', orderRoutes)


module.exports = router