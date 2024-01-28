const { Order, User } = require('../models')

module.exports = {
   async createOrder(req, res) {
      try {
         const newOrder = await Order.create(req.body)
         res.json(newOrder);
      } catch (err) {
         res.status(500).json(err)
      }

      //Update User to store past orders
      //    const updatedUser= 

      // async updateOneUser(req, res) {
      //     try {
      //         const oneUser = await User.findOneAndUpdate(
      //             { _id: req.params.id },
      //             { $set: req.body },
      //             { new: true }
      //         )
      //         res.json(oneUser)
      //     } catch (err) {
      //         console.log(err);
      //         res.status(500).json(err)
      //     }
      // }

   },
   async getOrders(req, res) {
      try {
         const orderData = await Order.find()
         console.log(orderData);
         res.json(orderData)
      } catch (err) {
         res.json(err)
      }
   },
   async getOneOrder(req, res) {
      try {
         const oneOrder = await Order.findOne({ _id: req.params.id })
         res.json(oneOrder)

      } catch (err) {
         console.log(err);
         res.status(500).json(err)
      }
   }
}





