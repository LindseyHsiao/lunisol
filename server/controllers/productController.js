const { Product } = require('../models')


module.exports = {
    async getProducts(req, res) {
        try {
            const productData = await Product.find()
            res.json(productData)
        } catch (err) {
            res.json(err)
        }
    },

    // async addProduct(req, res) {
    //     try {
    //         console.log(req.body);
    //         const newProduct = await Product.create(req.body)
    //         res.json(newProduct);
    //     } catch (err) {
    //         res.status(500).json(err)
    //     }

    // },
    async getOneProduct(req, res) {
        try {
            const oneProduct = await Product.findOne({ _id: req.params.id })
            res.json(oneProduct)

        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // async deleteOneProduct(req, res) {
    //     try {
    //         const oneProduct = await Product.findOneAndDelete(
    //             { _id: req.params.id },
    //             {new: true}
    //         )
    //         res.json({ message: 'Product Deleted' })
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json(err)
    //     }
    // },
    // async updateOneProduct(req, res) {
    //     try {
    //         const oneProduct = await Product.findOneAndUpdate(
    //             { _id: req.params.id },
    //             { $set: req.body },
    //             { new: true }
    //         )
    //         res.json(oneProduct)
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json(err)
    //     }
    // }
}