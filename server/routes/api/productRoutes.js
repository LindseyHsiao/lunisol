const router =  require('express').Router();
const { getProducts, getOneProduct, getProductsByCategory} =  require('../../controllers/productController')

router.route('/').get(getProducts)
router.route('/:id').get(getOneProduct)
router.route('/category/:categoryId').get(getProductsByCategory)

module.exports = router