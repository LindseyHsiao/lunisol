const router = require('express').Router();
const { getOneOrder, createOrder, getOrders } =  require('../../controllers/orderController')

// const {authMiddleware} =  require('../../utils/auth')

router.route('/').post(createOrder).get(getOrders);

router.route('/:id').get(getOneOrder);


// router.route('/:id').put(updateUser)

module.exports = router