const router = require('express').Router();

const { getUsers, addUsers, getOneUser, deleteOneUser, updateOneUser } =  require('../controllers/userController')

router.route('/users').get(getUsers).post(addUsers)
router.route('/users/:id').get(getOneUser).delete(deleteOneUser).put(updateOneUser)

module.exports = router



module.exports = router