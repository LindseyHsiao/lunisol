const router =  require('express').Router();
const { getProducts, getOneProduct} =  require('../../controllers/productController')

router.route('/').get(getProducts)
router.route('/:id').get(getOneProduct)

module.exports = router