const router =  require('express').Router()
const { getProducts, addProduct, getOneProduct, deleteOneProduct, updateOneProduct } =  require('../controllers/productController')

router.route('/products').get(getProducts).post(addProduct)
router.route('/products/:id').get(getOneProduct).delete(deleteOneProduct).put(updateOneProduct)

module.exports = router