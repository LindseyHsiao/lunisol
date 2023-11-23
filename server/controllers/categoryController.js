 const {Category} = require('../models')

 module.exports = {
    async getCategories(req, res){
        const categoryData = await Category.find()
        res.json(categoryData)
    }
 }
