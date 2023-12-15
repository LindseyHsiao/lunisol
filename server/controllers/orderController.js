const {Order, User} = require('../models')

module.exports = {
   async createOrder(req, res){
       const order = await Order.create(req.body)

    //    const updatedUser= 
    res.json(order)
   }
}