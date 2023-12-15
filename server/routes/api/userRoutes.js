const router = require('express').Router();
const { getSingleUser, login, createUser, checkout } =  require('../../controllers/userController')

const {authMiddleware} =  require('../../utils/auth')

router.route('/').post(createUser)
router.route('/:id').get(getSingleUser)
router.route('/login').post(login)

router.route('/checkout').get(
    // authMiddleware,
    checkout
    )

module.exports = router



