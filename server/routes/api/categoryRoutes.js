const router = require('express').Router()
const {getCategories, getOneCategory} = require('../../controllers/categoryController')

router.route('/').get(getCategories)
router.route('/:id').get(getOneCategory)


module.exports = router