 const {Category} = require('../models')

 module.exports = {
    async getCategories(req, res){
        const categoryData = await Category.find()
        res.json(categoryData)
    }, 
    async getOneCategory(req, res){
        const categoryData = Category.findById(req.params.id);
        res.json(categoryData)
    }
 }
